# Generated by Django 5.0.4 on 2024-04-19 07:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_course_featuredimage_course_teachnologies'),
    ]

    operations = [
        migrations.RenameField(
            model_name='course',
            old_name='teachnologies',
            new_name='technologies',
        ),
    ]
