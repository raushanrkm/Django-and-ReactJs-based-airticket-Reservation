# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-06-21 14:25
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ReservationDb',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.CharField(max_length=250)),
                ('time', models.CharField(max_length=250)),
                ('description', models.CharField(max_length=250)),
            ],
        ),
    ]
