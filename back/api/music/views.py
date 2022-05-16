from rest_framework import viewsets
from rest_framework import permissions
from api.music.serializers import *
from django.core import serializers
from rest_framework.views import APIView
from rest_framework.response import Response

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

class TicketViewSet(viewsets.ModelViewSet):
  queryset = Ticket.objects.all().order_by('purchase_date')
  serializer_class = TicketSerializer
  permission_classes = []

class TicketsAlbumsViewSet(viewsets.ModelViewSet):
  queryset = TicketsAlbums.objects.all().order_by('id')
  serializer_class = TicketsAlbumsSerializer
  permission_classes = []

class TicketsSongsViewSet(viewsets.ModelViewSet):
  queryset = TicketsSongs.objects.all().order_by('id')
  serializer_class = TicketsSongsSerializer
  permission_classes = []

class AlbumSongsView(APIView):
  def post(self, request):
    albumId = request.data['id']
    data = {}
    songs = Song.objects.filter(album=albumId)

    response = Response()
    
    for i in range(len(songs)):
      data[i] = {
        'id': songs[i].id,
        'name': songs[i].name,
      }
    response.data=data
    return response

class ArtistAlbumsView(APIView):
  def post(self, request):
    artistId = request.data['id']
    data = {}

    albums = Album.objects.filter(author_id=artistId)
    response = Response()

    for i in range(len(albums)):
      data[i] = {
        'id': albums[i].id,
        'name': albums[i].name,
        'image': albums[i].image,
        'genre': albums[i].genre,
        'price': albums[i].price,
      }
    response.data=data
    return response
