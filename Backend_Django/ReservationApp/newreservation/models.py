from __future__ import unicode_literals

from django.db import models

class ReservationDb(models.Model):
	Date= models.CharField(max_length=250)
	Time=models.CharField(max_length=250)
	Description=models.CharField(max_length=250)
	#email= models.CharField(max_length=250)
	def __str__(self):
		return self.Date
