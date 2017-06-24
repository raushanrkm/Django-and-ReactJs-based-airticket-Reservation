from rest_framework import serializers 
from . models import ReservationDb



class ReservationDbSerializer(serializers.ModelSerializer):
	class Meta:
		model=ReservationDb  
		fields= '__all__'
	
		