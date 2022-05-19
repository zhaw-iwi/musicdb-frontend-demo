// Pages
import Home from "./pages/Home.svelte";

import Albums from "./pages/albums/Albums.svelte"
import AlbumDetails from "./pages/albums/AlbumDetails.svelte"

import Artists from "./pages/artists/Artists.svelte"
import ArtistDetails from "./pages/artists/ArtistDetails.svelte"
import CreateArtist from "./pages/artists/CreateArtist.svelte"

export default {
    // Home
    '/': Home,
    '/home': Home,

    // Albums
    '/albums': Albums,
    '/albums/:id': AlbumDetails,
    
    // Artists
    '/artists': Artists,
    '/artists/:id': ArtistDetails,
    '/create-artist': CreateArtist,
}