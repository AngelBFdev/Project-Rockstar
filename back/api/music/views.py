from rest_framework import viewsets
from rest_framework import permissions
from api.music.serializers import *

class SongViewSet(viewsets.ModelViewSet):
  queryset = Song.objects.all().order_by('name')
  serializer_class = SongSerializer
  permission_classes = []
