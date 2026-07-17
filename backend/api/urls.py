from django.urls import path
from .views import create_quiz

urlpatterns = [
    path("quizzes/create", create_quiz, name="create_quiz"),
]