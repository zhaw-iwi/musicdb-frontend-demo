// Pages
import Home from "./pages/Home.svelte";

import Artists from "./pages/artists/Artists.svelte"
import ArtistDetails from "./pages/artists/ArtistDetails.svelte"

export default {
    // Home
    '/': Home,
    '/home': Home,

    // Artists
    '/artists': Artists,
    '/artists/:id': ArtistDetails

}