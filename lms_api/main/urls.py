from django.urls import path
from .import views

urlpatterns=[
        #Teacher
       path('teacher/',views.TeacherList.as_view()),
       path('teacher/<int:pk>/',views.TeacherDetail.as_view()),
       path('teacherlogin/',views.teacher_login),


       #Category
       path('category/',views.CategoryList.as_view()),
       #Course
       path('course/',views.CourseList.as_view()),
       path('studentassignments/',views.AssignmentList.as_view()),

       #Student
       path('student/',views.StudentList.as_view()),


]