<script>
    import axios from "axios";

    let artists = [];

    function getArtists() {
        axios.get("http://localhost:3001/api/artists").then((response) => {
            artists = response.data;
        });
    }
    getArtists();
</script>

<div class="mb-5">
    <h1 class="mt-3">List of all Artists</h1>
    <a href="#/create-artist">+ Add Artist</a>
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Origin</th>
            </tr>
        </thead>
        <tbody>
            {#each artists as artist}
                <tr>
                    <td>
                        <a href={"#/artists/" + artist._id}>
                            {artist._id}
                        </a>
                    </td>
                    <td>
                        {artist.name}
                    </td>
                    <td>
                        {artist.origin}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
