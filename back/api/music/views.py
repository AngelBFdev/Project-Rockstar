from rest_framework import viewsets
from rest_framework import permissions
from api.music.serializers import *

class SongViewSet(viewsets.ModelViewSet):
  queryset = Song.objects.all().order_by('name')
  serializer_class = SongSerializer
  permission_classes = []

class AlbumViewSet(viewsets.ModelViewSet):
  queryset = Album.objects.all().order_by('name')
  serializer_class = AlbumSerializer
  permission_classes = []

class ArtistViewSet(viewsets.ModelViewSet):
  queryset = Artist.objects.all().order_by('name')
  serializer_class = ArtistSerializer
  permission_classes = []

class AlbumsArtistsViewSet(viewsets.ModelViewSet):
  queryset = AlbumsArtists.objects.all().order_by('id')
  serializer_class = AlbumsArtistsSerializer
  permission_classes = []
