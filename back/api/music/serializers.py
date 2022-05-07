from rest_framework import serializers
from .models import *

		
class ArtistSerializer(serializers.ModelSerializer):
	class Meta:
		model = Artist
		fields = ['id', 'name', 'nationality']

class AlbumSerializer(serializers.ModelSerializer):
	authors = serializers.StringRelatedField(many=True)
	class Meta:
		model = Album
		fields = ['id', 'name', 'image', 'genre', 'release_date', 'price', 'authors']

class SongSerializer(serializers.ModelSerializer):
	album = serializers.StringRelatedField()
	class Meta:
		model = Song
		fields = ['id', 'name', 'song_length', 'song_file', 'song_preview', 'price', 'play', 'album']

class AlbumsArtistsSerializer(serializers.ModelSerializer):
	class Meta:
		model = AlbumsArtists
		fields = ['id', 'album', 'artist']
