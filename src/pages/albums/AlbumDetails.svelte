<script>
    import axios from "axios";

    export let params = {};
    let album_id;
    let artist_id;

    $: {
        album_id = params.id;
        getAlbum();
        getArtists();
    }

    let album = {
        _id: "",
        title: "",
        released: "",
        label: "",
        genres: [],
        artists: [],
    };

    let artists = [];

    function getAlbum() {
        axios.get("http://localhost:3001/api/albums/" + album_id)
            .then((response) => {
                album = response.data;
            });
    }

    function getArtists() {
        axios.get("http://localhost:3001/api/artists")
            .then((response) => {
                artists = response.data;
            });
    }

    function addArtistToAlbum() {
        album.artists.push(artist_id);
        axios.put("http://localhost:3001/api/albums/" + album_id, album)
            .then((response) => {
                getAlbum();
            });
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">Album (ID: {album_id})</h1>
    <p>Title: {album.title}</p>
    <p>Release Year: {album.released}</p>
    <p>Genres:</p>
    <ul>
        {#each album.genres as genre}
            <li>{genre}</li>
        {/each}
    </ul>
    <p>Artists:</p>
    <ul>
        {#each album.artists as artist}
            <li>
                <a href={"#/artists/" + artist}>{artist}</a>
            </li>
        {/each}
    </ul>

    <h2>Update Artists</h2>
    <label for="artist">Add Artist to album</label>
    <select class="form-select" bind:value={artist_id} id="artist">
        {#each artists as artist}
            <option value={artist._id}>{artist.name}</option>
        {/each}
    </select>
    <button class="btn btn-primary mt-2" on:click={addArtistToAlbum}>Update</button>
</div>
