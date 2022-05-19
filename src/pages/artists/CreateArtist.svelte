<script>
    import axios from "axios";

    let artist = {
        name: "",
        origin: "",
    };

    function addArtist() {
        axios
            .post("http://localhost:3001/api/artists", artist)
            .then((response) => {
                alert("Artist added");
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }
</script>

<div class="mb-5">
    <h1 class="mt-3">Add an artist</h1>

    <form>
        <div class="mb-3">
            <label for="" class="form-label">Name</label>
            <input class="form-control" type="text" bind:value={artist.name} />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Origin</label>
            <input
                class="form-control"
                type="text"
                bind:value={artist.origin}
            />
        </div>
        <button on:click={addArtist} type="button" class="btn btn-primary">
            Add Artist
        </button>
    </form>
</div>
