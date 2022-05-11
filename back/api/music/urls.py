from . import views
from rest_framework import routers
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r'song', views.SongViewSet)
router.register(r'album', views.AlbumViewSet)
# router.register(r'albumsartists', views.AlbumsArtistsViewSet)
router.register(r'artist', views.ArtistViewSet)

urlpatterns = [
	path('albumsongs', views.AlbumSongsView.as_view()),
	path('artistalbums', views.ArtistAlbumsView.as_view()),
	path('', include(router.urls)),
]
