from rest_framework import serializers
from .models import *

		
class ArtistSerializer(serializers.ModelSerializer):
	class Meta:
		model = Artist
		fields = ['id', 'name', 'nationality','image']

class AlbumSerializer(serializers.ModelSerializer):
	# author = ArtistSerializer()
	class Meta:
		model = Album
		fields = ['id', 'name', 'image', 'genre', 'release_date', 'price', 'author']

class SongSerializer(serializers.ModelSerializer):
	class Meta:
		model = Song
		fields = ['id', 'name', 'song_length', 'song_file', 'song_preview', 'price', 'play', 'album']

# class AlbumsArtistsSerializer(serializers.ModelSerializer):
# 	class Meta:
# 		model = AlbumsArtists
# 		fields = ['id', 'album', 'artist']

class TicketSerializer(serializers.ModelSerializer):
	class Meta:
		model = Ticket
		fields = ['id', 'purchase_date', 'user', 'albums', 'songs', 'total_price']


class TicketsAlbumsSerializer(serializers.ModelSerializer):
	class Meta:
		model = TicketsAlbums
		fields = ['id', 'ticket', 'album']

class TicketsSongsSerializer(serializers.ModelSerializer):
	class Meta:
		model = TicketsSongs
		fields = ['id', 'ticket', 'song']
