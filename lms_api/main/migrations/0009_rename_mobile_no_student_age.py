# Generated by Django 5.0.4 on 2024-04-23 19:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0008_studentassignments'),
    ]

    operations = [
        migrations.RenameField(
            model_name='student',
            old_name='mobile_no',
            new_name='age',
        ),
    ]
