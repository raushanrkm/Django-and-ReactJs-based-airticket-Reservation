from . models import ReservationDb
from . serializer import ReservationDbSerializer
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Q
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

class ReservationList(APIView):
  def get(self, request, searchkey):
     reservationList=ReservationDb.objects.all()

     if searchkey is None :
         serializer= ReservationDbSerializer(reservationList, many = 'true')
         return Response(serializer.data)
     condition= Q(Date__icontains=searchkey) | Q(Time__icontains=searchkey) |  Q(Description__icontains=searchkey)
     reservationList=reservationList.filter(condition)
     serializer= ReservationDbSerializer(reservationList, many = 'true')
     return Response(serializer.data)

@method_decorator(csrf_exempt, name='dispatch')
class AddNewReservation(APIView):
     def post(self, request, format=None):
     	
        serializer = ReservationDbSerializer(data=request.data)
        print"hello"
        if serializer.is_valid():
            serializer.save()
            return Response(request.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 


def homepage(request):
  pass

  