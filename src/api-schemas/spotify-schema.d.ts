export interface paths {
    "/albums/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Album
         *
         * @description Get Spotify catalog information for a single album.
         *
         */
        get: operations["get-an-album"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/albums": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Several Albums
         *
         * @description Get Spotify catalog information for multiple albums identified by their Spotify IDs.
         *
         */
        get: operations["get-multiple-albums"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/albums/{id}/tracks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Album Tracks
         *
         * @description Get Spotify catalog information about an album’s tracks.
         *     Optional parameters can be used to limit the number of tracks returned.
         *
         */
        get: operations["get-an-albums-tracks"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/artists/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Artist
         *
         * @description Get Spotify catalog information for a single artist identified by their unique Spotify ID.
         *
         */
        get: operations["get-an-artist"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/artists": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Several Artists
         *
         * @description Get Spotify catalog information for several artists based on their Spotify IDs.
         *
         */
        get: operations["get-multiple-artists"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/artists/{id}/albums": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Artist's Albums
         *
         * @description Get Spotify catalog information about an artist's albums.
         *
         */
        get: operations["get-an-artists-albums"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/artists/{id}/top-tracks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Artist's Top Tracks
         *
         * @description Get Spotify catalog information about an artist's top tracks by country.
         *
         */
        get: operations["get-an-artists-top-tracks"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/artists/{id}/related-artists": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Artist's Related Artists
         *
         * @description Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's listening history.
         *
         */
        get: operations["get-an-artists-related-artists"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shows/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Show
         *
         * @description Get Spotify catalog information for a single show identified by its
         *     unique Spotify ID.
         *
         */
        get: operations["get-a-show"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shows": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Several Shows
         *
         * @description Get Spotify catalog information for several shows based on their Spotify IDs.
         *
         */
        get: operations["get-multiple-shows"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shows/{id}/episodes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Show Episodes
         *
         * @description Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.
         *
         */
        get: operations["get-a-shows-episodes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/episodes/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Episode
         *
         * @description Get Spotify catalog information for a single episode identified by its
         *     unique Spotify ID.
         *
         */
        get: operations["get-an-episode"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/episodes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Several Episodes
         *
         * @description Get Spotify catalog information for several episodes based on their Spotify IDs.
         *
         */
        get: operations["get-multiple-episodes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/audiobooks/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get an Audiobook
         *
         * @description Get Spotify catalog information for a single audiobook. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.
         *
         */
        get: operations["get-an-audiobook"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/audiobooks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Several Audiobooks
         *
         * @description Get Spotify catalog information for several audiobooks identified by their Spotify IDs. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.
         *
         */
        get: operations["get-multiple-audiobooks"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/audiobooks/{id}/chapters": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Audiobook Chapters
         *
         * @description Get Spotify catalog information about an audiobook's chapters. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.
         *
         */
        get: operations["get-audiobook-chapters"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me/audiobooks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get User's Saved Audiobooks
         *
         * @description Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.
         *
         */
        get: operations["get-users-saved-audiobooks"];
        /**
         * Save Audiobooks for Current User
         *
         * @description Save one or more audiobooks to the current Spotify user's library.
         *
         */
        put: operations["save-audiobooks-user"];
        post?: never;
        /**
         * Remove User's Saved Audiobooks
         *
         * @description Remove one or more audiobooks from the Spotify user's library.
         *
         */
        delete: operations["remove-audiobooks-user"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me/audiobooks/contains": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Check User's Saved Audiobooks
         *
         * @description Check if one or more audiobooks are already saved in the current Spotify user's library.
         *
         */
        get: operations["check-users-saved-audiobooks"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chapters/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a Chapter
         *
         * @description Get Spotify catalog information for a single audiobook chapter. Chapters are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.
         *
         */
        get: operations["get-a-chapter"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chapters": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Several Chapters
         *
         * @description Get Spotify catalog information for several audiobook chapters identified by their Spotify IDs. Chapters are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.
         *
         */
        get: operations["get-several-chapters"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tracks/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Track
         *
         * @description Get Spotify catalog information for a single track identified by its
         *     unique Spotify ID.
         *
         */
        get: operations["get-track"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tracks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Several Tracks
         *
         * @description Get Spotify catalog information for multiple tracks based on their Spotify IDs.
         *
         */
        get: operations["get-several-tracks"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search for Item
         *
         * @description Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks
         *     that match a keyword string. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.
         *
         */
        get: operations["search"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Current User's Profile
         *
         * @description Get detailed profile information about the current user (including the
         *     current user's username).
         *
         */
        get: operations["get-current-users-profile"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/playlists/{playlist_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Playlist
         *
         * @description Get a playlist owned by a Spotify user.
         *
         */
        get: operations["get-playlist"];
        /**
         * Change Playlist Details
         *
         * @description Change a playlist's name and public/private state. (The user must, of
         *     course, own the playlist.)
         *
         */
        put: operations["change-playlist-details"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/playlists/{playlist_id}/tracks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Playlist Items
         *
         * @description Get full details of the items of a playlist owned by a Spotify user.
         *
         */
        get: operations["get-playlists-tracks"];
        /**
         * Update Playlist Items
         *
         * @description Either reorder or replace items in a playlist depending on the request's parameters.
         *     To reorder items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the request's body.
         *     To replace items, include `uris` as either a query parameter or in the request's body.
         *     Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist.
         *     <br/>
         *     **Note**: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters.
         *     These operations can't be applied together in a single request.
         *
         */
        put: operations["reorder-or-replace-playlists-tracks"];
        /**
         * Add Items to Playlist
         *
         * @description Add one or more items to a user's playlist.
         *
         */
        post: operations["add-tracks-to-playlist"];
        /**
         * Remove Playlist Items
         *
         * @description Remove one or more items from a user's playlist.
         *
         */
        delete: operations["remove-tracks-playlist"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me/playlists": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Current User's Playlists
         *
         * @description Get a list of the playlists owned or followed by the current Spotify
         *     user.
         *
         */
        get: operations["get-a-list-of-current-users-playlists"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me/albums": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get User's Saved Albums
         *
         * @description Get a list of the albums saved in the current Spotify user's 'Your Music' library.
         *
         */
        get: operations["get-users-saved-albums"];
        /**
         * Save Albums for Current User
         *
         * @description Save one or more albums to the current user's 'Your Music' library.
         *
         */
        put: operations["save-albums-user"];
        post?: never;
        /**
         * Remove Users' Saved Albums
         *
         * @description Remove one or more albums from the current user's 'Your Music' library.
         *
         */
        delete: operations["remove-albums-user"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me/albums/contains": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Check User's Saved Albums
         *
         * @description Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.
         *
         */
        get: operations["check-users-saved-albums"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me/tracks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get User's Saved Tracks
         *
         * @description Get a list of the songs saved in the current Spotify user's 'Your Music' library.
         *
         */
        get: operations["get-users-saved-tracks"];
        /**
         * Save Tracks for Current User
         *
         * @description Save one or more tracks to the current user's 'Your Music' library.
         *
         */
        put: operations["save-tracks-user"];
        post?: never;
        /**
         * Remove User's Saved Tracks
         *
         * @description Remove one or more tracks from the current user's 'Your Music' library.
         *
         */
        delete: operations["remove-tracks-user"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me/tracks/contains": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Check User's Saved Tracks
         *
         * @description Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.
         *
         */
        get: operations["check-users-saved-tracks"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me/episodes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get User's Saved Episodes
         *
         * @description Get a list of the episodes saved in the current Spotify user's library.<br/>
         *     This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
         *
         */
        get: operations["get-users-saved-episodes"];
        /**
         * Save Episodes for Current User
         *
         * @description Save one or more episodes to the current user's library.<br/>
         *     This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
         *
         */
        put: operations["save-episodes-user"];
        post?: never;
        /**
         * Remove User's Saved Episodes
         *
         * @description Remove one or more episodes from the current user's library.<br/>
         *     This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).
         *
         */
        delete: operations["remove-episodes-user"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me/episodes/contains": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Check User's Saved Episodes
         *
         * @description Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.<br/>
         *     This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)..
         *
         */
        get: operations["check-users-saved-episodes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me/shows": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get User's Saved Shows
         *
         * @description Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.
         *
         */
        get: operations["get-users-saved-shows"];
        /**
         * Save Shows for Current User
         *
         * @description Save one or more shows to current Spotify user's library.
         *
         */
        put: operations["save-shows-user"];
        post?: never;
        /**
         * Remove User's Saved Shows
         *
         * @description Delete one or more shows from current Spotify user's library.
         *
         */
        delete: operations["remove-shows-user"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me/shows/contains": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Check User's Saved Shows
         *
         * @description Check if one or more shows is already saved in the current Spotify user's library.
         *
         */
        get: operations["check-users-saved-shows"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me/top/{type}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get User's Top Items
         *
         * @description Get the current user's top artists or tracks based on calculated affinity.
         *
         */
        get: operations["get-users-top-artists-and-tracks"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get User's Profile
         *
         * @description Get public profile information about a Spotify user.
         *
         */
        get: operations["get-users-profile"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{user_id}/playlists": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get User's Playlists
         *
         * @description Get a list of the playlists owned or followed by a Spotify user.
         *
         */
        get: operations["get-list-users-playlists"];
        put?: never;
        /**
         * Create Playlist
         *
         * @description Create a playlist for a Spotify user. (The playlist will be empty until
         *     you [add tracks](/documentation/web-api/reference/add-tracks-to-playlist).)
         *     Each user is generally limited to a maximum of 11000 playlists.
         *
         */
        post: operations["create-playlist"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/playlists/{playlist_id}/followers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Follow Playlist
         *
         * @description Add the current user as a follower of a playlist.
         *
         */
        put: operations["follow-playlist"];
        post?: never;
        /**
         * Unfollow Playlist
         *
         * @description Remove the current user as a follower of a playlist.
         *
         */
        delete: operations["unfollow-playlist"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/browse/featured-playlists": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Featured Playlists
         *
         * @description Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).
         *
         */
        get: operations["get-featured-playlists"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/browse/categories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Several Browse Categories
         *
         * @description Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
         *
         */
        get: operations["get-categories"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/browse/categories/{category_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Single Browse Category
         *
         * @description Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
         *
         */
        get: operations["get-a-category"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/browse/categories/{category_id}/playlists": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Category's Playlists
         *
         * @description Get a list of Spotify playlists tagged with a particular category.
         *
         */
        get: operations["get-a-categories-playlists"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/playlists/{playlist_id}/images": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Playlist Cover Image
         *
         * @description Get the current image associated with a specific playlist.
         *
         */
        get: operations["get-playlist-cover"];
        /**
         * Add Custom Playlist Cover Image
         *
         * @description Replace the image used to represent a specific playlist.
         *
         */
        put: operations["upload-custom-playlist-cover"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/browse/new-releases": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get New Releases
         *
         * @description Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).
         *
         */
        get: operations["get-new-releases"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me/following": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Followed Artists
         *
         * @description Get the current user's followed artists.
         *
         */
        get: operations["get-followed"];
        /**
         * Follow Artists or Users
         *
         * @description Add the current user as a follower of one or more artists or other Spotify users.
         *
         */
        put: operations["follow-artists-users"];
        post?: never;
        /**
         * Unfollow Artists or Users
         *
         * @description Remove the current user as a follower of one or more artists or other Spotify users.
         *
         */
        delete: operations["unfollow-artists-users"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me/following/contains": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Check If User Follows Artists or Users
         *
         * @description Check to see if the current user is following one or more artists or other Spotify users.
         *
         */
        get: operations["check-current-user-follows"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/playlists/{playlist_id}/followers/contains": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Check if Current User Follows Playlist
         *
         * @description Check to see if the current user is following a specified playlist.
         *
         */
        get: operations["check-if-user-follows-playlist"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/audio-features": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Several Tracks' Audio Features
         *
         * @description Get audio features for multiple tracks based on their Spotify IDs.
         *
         */
        get: operations["get-several-audio-features"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/audio-features/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Track's Audio Features
         *
         * @description Get audio feature information for a single track identified by its unique
         *     Spotify ID.
         *
         */
        get: operations["get-audio-features"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/audio-analysis/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Track's Audio Analysis
         *
         * @description Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre.
         *
         */
        get: operations["get-audio-analysis"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/recommendations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Recommendations
         *
         * @description Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.
         *
         *     For artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks.
         *
         */
        get: operations["get-recommendations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/recommendations/available-genre-seeds": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Available Genre Seeds
         *
         * @description Retrieve a list of available genres seed parameter values for [recommendations](/documentation/web-api/reference/get-recommendations).
         *
         */
        get: operations["get-recommendation-genres"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me/player": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Playback State
         *
         * @description Get information about the user’s current playback state, including track or episode, progress, and active device.
         *
         */
        get: operations["get-information-about-the-users-current-playback"];
        /**
         * Transfer Playback
         *
         * @description Transfer playback to a new device and optionally begin playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
         *
         */
        put: operations["transfer-a-users-playback"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me/player/devices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Available Devices
         *
         * @description Get information about a user’s available Spotify Connect devices. Some device models are not supported and will not be listed in the API response.
         *
         */
        get: operations["get-a-users-available-devices"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me/player/currently-playing": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Currently Playing Track
         *
         * @description Get the object currently being played on the user's Spotify account.
         *
         */
        get: operations["get-the-users-currently-playing-track"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me/player/play": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Start/Resume Playback
         *
         * @description Start a new context or resume current playback on the user's active device. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
         *
         */
        put: operations["start-a-users-playback"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me/player/pause": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Pause Playback
         *
         * @description Pause playback on the user's account. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
         *
         */
        put: operations["pause-a-users-playback"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me/player/next": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Skip To Next
         *
         * @description Skips to next track in the user’s queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
         *
         */
        post: operations["skip-users-playback-to-next-track"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me/player/previous": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Skip To Previous
         *
         * @description Skips to previous track in the user’s queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
         *
         */
        post: operations["skip-users-playback-to-previous-track"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me/player/seek": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Seek To Position
         *
         * @description Seeks to the given position in the user’s currently playing track. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
         *
         */
        put: operations["seek-to-position-in-currently-playing-track"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me/player/repeat": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Set Repeat Mode
         *
         * @description Set the repeat mode for the user's playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
         *
         */
        put: operations["set-repeat-mode-on-users-playback"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me/player/volume": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Set Playback Volume
         *
         * @description Set the volume for the user’s current playback device. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
         *
         */
        put: operations["set-volume-for-users-playback"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me/player/shuffle": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Toggle Playback Shuffle
         *
         * @description Toggle shuffle on or off for user’s playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
         *
         */
        put: operations["toggle-shuffle-for-users-playback"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me/player/recently-played": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Recently Played Tracks
         *
         * @description Get tracks from the current user's recently played tracks.
         *     _**Note**: Currently doesn't support podcast episodes._
         *
         */
        get: operations["get-recently-played"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me/player/queue": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get the User's Queue
         *
         * @description Get the list of objects that make up the user's queue.
         *
         */
        get: operations["get-queue"];
        put?: never;
        /**
         * Add Item to Playback Queue
         *
         * @description Add an item to the end of the user's current playback queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.
         *
         */
        post: operations["add-to-queue"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/markets": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Available Markets
         *
         * @description Get the list of markets where Spotify is available.
         *
         */
        get: operations["get-available-markets"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        LinkedTrackObject: {
            /** @description Known external URLs for this track.
             *      */
            external_urls?: components["schemas"]["ExternalUrlObject"];
            /** @description A link to the Web API endpoint providing full details of the track.
             *      */
            href?: string;
            /** @description The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.
             *      */
            id?: string;
            /** @description The object type: "track".
             *      */
            type?: string;
            /** @description The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the track.
             *      */
            uri?: string;
        };
        TrackRestrictionObject: {
            /** @description The reason for the restriction. Supported values:
             *     - `market` - The content item is not available in the given market.
             *     - `product` - The content item is not available for the user's subscription type.
             *     - `explicit` - The content item is explicit and the user's account is set to not play explicit content.
             *
             *     Additional reasons may be added in the future.
             *     **Note**: If you use this field, make sure that your application safely handles unknown values.
             *      */
            reason?: string;
        };
        AlbumRestrictionObject: {
            /**
             * @description The reason for the restriction. Albums may be restricted if the content is not available in a given market, to the user's subscription type, or when the user's account is set to not play explicit content.
             *     Additional reasons may be added in the future.
             *
             * @enum {string}
             */
            reason?: "market" | "product" | "explicit";
        };
        EpisodeRestrictionObject: {
            /** @description The reason for the restriction. Supported values:
             *     - `market` - The content item is not available in the given market.
             *     - `product` - The content item is not available for the user's subscription type.
             *     - `explicit` - The content item is explicit and the user's account is set to not play explicit content.
             *
             *     Additional reasons may be added in the future.
             *     **Note**: If you use this field, make sure that your application safely handles unknown values.
             *      */
            reason?: string;
        };
        ChapterRestrictionObject: {
            /** @description The reason for the restriction. Supported values:
             *     - `market` - The content item is not available in the given market.
             *     - `product` - The content item is not available for the user's subscription type.
             *     - `explicit` - The content item is explicit and the user's account is set to not play explicit content.
             *     - `payment_required` - Payment is required to play the content item.
             *
             *     Additional reasons may be added in the future.
             *     **Note**: If you use this field, make sure that your application safely handles unknown values.
             *      */
            reason?: string;
        };
        ArtistObject: {
            /** @description Known external URLs for this artist.
             *      */
            external_urls?: components["schemas"]["ExternalUrlObject"];
            /** @description Information about the followers of the artist.
             *      */
            followers?: components["schemas"]["FollowersObject"];
            /**
             * @description A list of the genres the artist is associated with. If not yet classified, the array is empty.
             *
             * @example [
             *       "Prog rock",
             *       "Grunge"
             *     ]
             */
            genres?: string[];
            /** @description A link to the Web API endpoint providing full details of the artist.
             *      */
            href?: string;
            /** @description The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the artist.
             *      */
            id?: string;
            /** @description Images of the artist in various sizes, widest first.
             *      */
            images?: components["schemas"]["ImageObject"][];
            /** @description The name of the artist.
             *      */
            name?: string;
            /** @description The popularity of the artist. The value will be between 0 and 100, with 100 being the most popular. The artist's popularity is calculated from the popularity of all the artist's tracks.
             *      */
            popularity?: number;
            /**
             * @description The object type.
             *      (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "ArtistObject";
            /** @description The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the artist.
             *      */
            uri?: string;
        };
        SimplifiedArtistObject: {
            /** @description Known external URLs for this artist.
             *      */
            external_urls?: components["schemas"]["ExternalUrlObject"];
            /** @description A link to the Web API endpoint providing full details of the artist.
             *      */
            href?: string;
            /** @description The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the artist.
             *      */
            id?: string;
            /** @description The name of the artist.
             *      */
            name?: string;
            /**
             * @description The object type.
             *
             * @enum {string}
             */
            type?: "artist";
            /** @description The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the artist.
             *      */
            uri?: string;
        };
        PlayHistoryObject: {
            /** @description The track the user listened to. */
            track?: components["schemas"]["TrackObject"];
            /**
             * Format: date-time
             * @description The date and time the track was played.
             */
            played_at?: string;
            /** @description The context the track was played from. */
            context?: components["schemas"]["ContextObject"];
        };
        PlaylistTrackObject: {
            /**
             * Format: date-time
             * @description The date and time the track or episode was added. _**Note**: some very old playlists may return `null` in this field._
             *
             */
            added_at?: string;
            /** @description The Spotify user who added the track or episode. _**Note**: some very old playlists may return `null` in this field._
             *      */
            added_by?: components["schemas"]["PlaylistUserObject"];
            /** @description Whether this track or episode is a [local file](/documentation/web-api/concepts/playlists/#local-files) or not.
             *      */
            is_local?: boolean;
            /** @description Information about the track or episode. */
            track?: components["schemas"]["TrackObject"] | components["schemas"]["EpisodeObject"];
        };
        QueueObject: {
            /** @description The currently playing track or episode. Can be `null`. */
            currently_playing?: components["schemas"]["TrackObject"] | components["schemas"]["EpisodeObject"];
            /** @description The tracks or episodes in the queue. Can be empty. */
            queue?: (components["schemas"]["TrackObject"] | components["schemas"]["EpisodeObject"])[];
        };
        CurrentlyPlayingContextObject: {
            /** @description The device that is currently active.
             *      */
            device?: components["schemas"]["DeviceObject"];
            /** @description off, track, context */
            repeat_state?: string;
            /** @description If shuffle is on or off. */
            shuffle_state?: boolean;
            /** @description A Context Object. Can be `null`. */
            context?: components["schemas"]["ContextObject"];
            /** @description Unix Millisecond Timestamp when playback state was last changed (play, pause, skip, scrub, new song, etc.). */
            timestamp?: number;
            /** @description Progress into the currently playing track or episode. Can be `null`. */
            progress_ms?: number;
            /** @description If something is currently playing, return `true`. */
            is_playing?: boolean;
            /** @description The currently playing track or episode. Can be `null`. */
            item?: components["schemas"]["TrackObject"] | components["schemas"]["EpisodeObject"];
            /** @description The object type of the currently playing item. Can be one of `track`, `episode`, `ad` or `unknown`.
             *      */
            currently_playing_type?: string;
            /** @description Allows to update the user interface based on which playback actions are available within the current context.
             *      */
            actions?: components["schemas"]["DisallowsObject"];
        };
        DisallowsObject: {
            /** @description Interrupting playback. Optional field. */
            interrupting_playback?: boolean;
            /** @description Pausing. Optional field. */
            pausing?: boolean;
            /** @description Resuming. Optional field. */
            resuming?: boolean;
            /** @description Seeking playback location. Optional field. */
            seeking?: boolean;
            /** @description Skipping to the next context. Optional field. */
            skipping_next?: boolean;
            /** @description Skipping to the previous context. Optional field. */
            skipping_prev?: boolean;
            /** @description Toggling repeat context flag. Optional field. */
            toggling_repeat_context?: boolean;
            /** @description Toggling shuffle flag. Optional field. */
            toggling_shuffle?: boolean;
            /** @description Toggling repeat track flag. Optional field. */
            toggling_repeat_track?: boolean;
            /** @description Transfering playback between devices. Optional field. */
            transferring_playback?: boolean;
        };
        ErrorObject: {
            /** @description The HTTP status code (also returned in the response header; see [Response Status Codes](/documentation/web-api/concepts/api-calls#response-status-codes) for more information).
             *      */
            status: number;
            /** @description A short description of the cause of the error.
             *      */
            message: string;
        };
        PrivateUserObject: {
            /** @description The country of the user, as set in the user's account profile. An [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). _This field is only available when the current user has granted access to the [user-read-private](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._
             *      */
            country?: string;
            /** @description The name displayed on the user's profile. `null` if not available.
             *      */
            display_name?: string;
            /** @description The user's email address, as entered by the user when creating their account. _**Important!** This email address is unverified; there is no proof that it actually belongs to the user._ _This field is only available when the current user has granted access to the [user-read-email](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._
             *      */
            email?: string;
            /** @description The user's explicit content settings. _This field is only available when the current user has granted access to the [user-read-private](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._
             *      */
            explicit_content?: components["schemas"]["ExplicitContentSettingsObject"];
            /** @description Known external URLs for this user. */
            external_urls?: components["schemas"]["ExternalUrlObject"];
            /** @description Information about the followers of the user. */
            followers?: components["schemas"]["FollowersObject"];
            /** @description A link to the Web API endpoint for this user.
             *      */
            href?: string;
            /** @description The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for the user.
             *      */
            id?: string;
            /** @description The user's profile image. */
            images?: components["schemas"]["ImageObject"][];
            /** @description The user's Spotify subscription level: "premium", "free", etc. (The subscription level "open" can be considered the same as "free".) _This field is only available when the current user has granted access to the [user-read-private](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._
             *      */
            product?: string;
            /** @description The object type: "user"
             *      */
            type?: string;
            /** @description The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the user.
             *      */
            uri?: string;
        };
        PublicUserObject: {
            /** @description The name displayed on the user's profile. `null` if not available.
             *      */
            display_name?: string | null;
            /** @description Known public external URLs for this user.
             *      */
            external_urls?: components["schemas"]["ExternalUrlObject"];
            /** @description Information about the followers of this user.
             *      */
            followers?: components["schemas"]["FollowersObject"];
            /** @description A link to the Web API endpoint for this user.
             *      */
            href?: string;
            /** @description The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for this user.
             *      */
            id?: string;
            /** @description The user's profile image.
             *      */
            images?: components["schemas"]["ImageObject"][];
            /**
             * @description The object type.
             *
             * @enum {string}
             */
            type?: "user";
            /** @description The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for this user.
             *      */
            uri?: string;
        };
        AudioAnalysisObject: {
            meta?: {
                /**
                 * @description The version of the Analyzer used to analyze this track.
                 * @example 4.0.0
                 */
                analyzer_version?: string;
                /**
                 * @description The platform used to read the track's audio data.
                 * @example Linux
                 */
                platform?: string;
                /**
                 * @description A detailed status code for this track. If analysis data is missing, this code may explain why.
                 * @example OK
                 */
                detailed_status?: string;
                /**
                 * @description The return code of the analyzer process. 0 if successful, 1 if any errors occurred.
                 * @example 0
                 */
                status_code?: number;
                /**
                 * @description The Unix timestamp (in seconds) at which this track was analyzed.
                 * @example 1495193577
                 */
                timestamp?: number;
                /**
                 * @description The amount of time taken to analyze this track.
                 * @example 6.93906
                 */
                analysis_time?: number;
                /**
                 * @description The method used to read the track's audio data.
                 * @example libvorbisfile L+R 44100->22050
                 */
                input_process?: string;
            };
            track?: {
                /**
                 * @description The exact number of audio samples analyzed from this track. See also `analysis_sample_rate`.
                 * @example 4585515
                 */
                num_samples?: number;
                /**
                 * @description Length of the track in seconds.
                 * @example 207.95985
                 */
                duration?: number;
                /** @description This field will always contain the empty string. */
                sample_md5?: string;
                /**
                 * @description An offset to the start of the region of the track that was analyzed. (As the entire track is analyzed, this should always be 0.)
                 * @example 0
                 */
                offset_seconds?: number;
                /**
                 * @description The length of the region of the track was analyzed, if a subset of the track was analyzed. (As the entire track is analyzed, this should always be 0.)
                 * @example 0
                 */
                window_seconds?: number;
                /**
                 * @description The sample rate used to decode and analyze this track. May differ from the actual sample rate of this track available on Spotify.
                 * @example 22050
                 */
                analysis_sample_rate?: number;
                /**
                 * @description The number of channels used for analysis. If 1, all channels are summed together to mono before analysis.
                 * @example 1
                 */
                analysis_channels?: number;
                /**
                 * @description The time, in seconds, at which the track's fade-in period ends. If the track has no fade-in, this will be 0.0.
                 * @example 0
                 */
                end_of_fade_in?: number;
                /**
                 * @description The time, in seconds, at which the track's fade-out period starts. If the track has no fade-out, this should match the track's length.
                 * @example 201.13705
                 */
                start_of_fade_out?: number;
                loudness?: components["schemas"]["Loudness"];
                tempo?: components["schemas"]["Tempo"];
                /**
                 * @description The confidence, from 0.0 to 1.0, of the reliability of the `tempo`.
                 * @example 0.73
                 */
                tempo_confidence?: number;
                time_signature?: components["schemas"]["TimeSignature"];
                /**
                 * @description The confidence, from 0.0 to 1.0, of the reliability of the `time_signature`.
                 * @example 0.994
                 */
                time_signature_confidence?: number;
                key?: components["schemas"]["Key"];
                /**
                 * @description The confidence, from 0.0 to 1.0, of the reliability of the `key`.
                 * @example 0.408
                 */
                key_confidence?: number;
                mode?: components["schemas"]["Mode"];
                /**
                 * @description The confidence, from 0.0 to 1.0, of the reliability of the `mode`.
                 * @example 0.485
                 */
                mode_confidence?: number;
                /** @description An [Echo Nest Musical Fingerprint (ENMFP)](https://academiccommons.columbia.edu/doi/10.7916/D8Q248M4) codestring for this track. */
                codestring?: string;
                /**
                 * @description A version number for the Echo Nest Musical Fingerprint format used in the codestring field.
                 * @example 3.15
                 */
                code_version?: number;
                /** @description An [EchoPrint](https://github.com/spotify/echoprint-codegen) codestring for this track. */
                echoprintstring?: string;
                /**
                 * @description A version number for the EchoPrint format used in the echoprintstring field.
                 * @example 4.15
                 */
                echoprint_version?: number;
                /** @description A [Synchstring](https://github.com/echonest/synchdata) for this track. */
                synchstring?: string;
                /**
                 * @description A version number for the Synchstring used in the synchstring field.
                 * @example 1
                 */
                synch_version?: number;
                /** @description A Rhythmstring for this track. The format of this string is similar to the Synchstring. */
                rhythmstring?: string;
                /**
                 * @description A version number for the Rhythmstring used in the rhythmstring field.
                 * @example 1
                 */
                rhythm_version?: number;
            };
            /** @description The time intervals of the bars throughout the track. A bar (or measure) is a segment of time defined as a given number of beats. */
            bars?: components["schemas"]["TimeIntervalObject"][];
            /** @description The time intervals of beats throughout the track. A beat is the basic time unit of a piece of music; for example, each tick of a metronome. Beats are typically multiples of tatums. */
            beats?: components["schemas"]["TimeIntervalObject"][];
            /** @description Sections are defined by large variations in rhythm or timbre, e.g. chorus, verse, bridge, guitar solo, etc. Each section contains its own descriptions of tempo, key, mode, time_signature, and loudness. */
            sections?: components["schemas"]["SectionObject"][];
            /** @description Each segment contains a roughly conisistent sound throughout its duration. */
            segments?: components["schemas"]["SegmentObject"][];
            /** @description A tatum represents the lowest regular pulse train that a listener intuitively infers from the timing of perceived musical events (segments). */
            tatums?: components["schemas"]["TimeIntervalObject"][];
        };
        TimeIntervalObject: {
            /**
             * @description The starting point (in seconds) of the time interval.
             * @example 0.49567
             */
            start?: number;
            /**
             * @description The duration (in seconds) of the time interval.
             * @example 2.18749
             */
            duration?: number;
            /**
             * @description The confidence, from 0.0 to 1.0, of the reliability of the interval.
             * @example 0.925
             */
            confidence?: number;
        };
        SectionObject: {
            /**
             * @description The starting point (in seconds) of the section.
             * @example 0
             */
            start?: number;
            /**
             * @description The duration (in seconds) of the section.
             * @example 6.97092
             */
            duration?: number;
            /**
             * @description The confidence, from 0.0 to 1.0, of the reliability of the section's "designation".
             * @example 1
             */
            confidence?: number;
            /**
             * @description The overall loudness of the section in decibels (dB). Loudness values are useful for comparing relative loudness of sections within tracks.
             * @example -14.938
             */
            loudness?: number;
            /**
             * @description The overall estimated tempo of the section in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.
             * @example 113.178
             */
            tempo?: number;
            /**
             * @description The confidence, from 0.0 to 1.0, of the reliability of the tempo. Some tracks contain tempo changes or sounds which don't contain tempo (like pure speech) which would correspond to a low value in this field.
             * @example 0.647
             */
            tempo_confidence?: number;
            /**
             * @description The estimated overall key of the section. The values in this field ranging from 0 to 11 mapping to pitches using standard Pitch Class notation (E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on). If no key was detected, the value is -1.
             * @example 9
             */
            key?: number;
            /**
             * @description The confidence, from 0.0 to 1.0, of the reliability of the key. Songs with many key changes may correspond to low values in this field.
             * @example 0.297
             */
            key_confidence?: number;
            /**
             * @description Indicates the modality (major or minor) of a section, the type of scale from which its melodic content is derived. This field will contain a 0 for "minor", a 1 for "major", or a -1 for no result. Note that the major key (e.g. C major) could more likely be confused with the minor key at 3 semitones lower (e.g. A minor) as both keys carry the same pitches.
             * @enum {number}
             */
            mode?: -1 | 0 | 1;
            /**
             * @description The confidence, from 0.0 to 1.0, of the reliability of the `mode`.
             * @example 0.471
             */
            mode_confidence?: number;
            time_signature?: components["schemas"]["TimeSignature"];
            /**
             * @description The confidence, from 0.0 to 1.0, of the reliability of the `time_signature`. Sections with time signature changes may correspond to low values in this field.
             * @example 1
             */
            time_signature_confidence?: number;
        };
        SegmentObject: {
            /**
             * @description The starting point (in seconds) of the segment.
             * @example 0.70154
             */
            start?: number;
            /**
             * @description The duration (in seconds) of the segment.
             * @example 0.19891
             */
            duration?: number;
            /**
             * @description The confidence, from 0.0 to 1.0, of the reliability of the segmentation. Segments of the song which are difficult to logically segment (e.g: noise) may correspond to low values in this field.
             *
             * @example 0.435
             */
            confidence?: number;
            /**
             * @description The onset loudness of the segment in decibels (dB). Combined with `loudness_max` and `loudness_max_time`, these components can be used to describe the "attack" of the segment.
             * @example -23.053
             */
            loudness_start?: number;
            /**
             * @description The peak loudness of the segment in decibels (dB). Combined with `loudness_start` and `loudness_max_time`, these components can be used to describe the "attack" of the segment.
             * @example -14.25
             */
            loudness_max?: number;
            /**
             * @description The segment-relative offset of the segment peak loudness in seconds. Combined with `loudness_start` and `loudness_max`, these components can be used to desctibe the "attack" of the segment.
             * @example 0.07305
             */
            loudness_max_time?: number;
            /**
             * @description The offset loudness of the segment in decibels (dB). This value should be equivalent to the loudness_start of the following segment.
             * @example 0
             */
            loudness_end?: number;
            /**
             * @description Pitch content is given by a “chroma” vector, corresponding to the 12 pitch classes C, C#, D to B, with values ranging from 0 to 1 that describe the relative dominance of every pitch in the chromatic scale. For example a C Major chord would likely be represented by large values of C, E and G (i.e. classes 0, 4, and 7).
             *
             *     Vectors are normalized to 1 by their strongest dimension, therefore noisy sounds are likely represented by values that are all close to 1, while pure tones are described by one value at 1 (the pitch) and others near 0.
             *     As can be seen below, the 12 vector indices are a combination of low-power spectrum values at their respective pitch frequencies.
             *     ![pitch vector](https://developer.spotify.com/assets/audio/Pitch_vector.png)
             *
             * @example [
             *       0.212,
             *       0.141,
             *       0.294
             *     ]
             */
            pitches?: number[];
            /**
             * @description Timbre is the quality of a musical note or sound that distinguishes different types of musical instruments, or voices. It is a complex notion also referred to as sound color, texture, or tone quality, and is derived from the shape of a segment’s spectro-temporal surface, independently of pitch and loudness. The timbre feature is a vector that includes 12 unbounded values roughly centered around 0. Those values are high level abstractions of the spectral surface, ordered by degree of importance.
             *
             *     For completeness however, the first dimension represents the average loudness of the segment; second emphasizes brightness; third is more closely correlated to the flatness of a sound; fourth to sounds with a stronger attack; etc. See an image below representing the 12 basis functions (i.e. template segments).
             *     ![timbre basis functions](https://developer.spotify.com/assets/audio/Timbre_basis_functions.png)
             *
             *     The actual timbre of the segment is best described as a linear combination of these 12 basis functions weighted by the coefficient values: timbre = c1 x b1 + c2 x b2 + ... + c12 x b12, where c1 to c12 represent the 12 coefficients and b1 to b12 the 12 basis functions as displayed below. Timbre vectors are best used in comparison with each other.
             *
             * @example [
             *       42.115,
             *       64.373,
             *       -0.233
             *     ]
             */
            timbre?: number[];
        };
        /**
         * @description An estimated time signature. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure). The time signature ranges from 3 to 7 indicating time signatures of "3/4", to "7/4".
         * @example 4
         */
        TimeSignature: number;
        /**
         * Format: float
         * @description The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.
         *
         * @example 118.211
         */
        Tempo: number;
        /**
         * Format: float
         * @description The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typically range between -60 and 0 db.
         *
         * @example -5.883
         */
        Loudness: number;
        /**
         * @description The key the track is in. Integers map to pitches using standard [Pitch Class notation](https://en.wikipedia.org/wiki/Pitch_class). E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on. If no key was detected, the value is -1.
         *
         * @example 9
         */
        Key: number;
        /**
         * @description Mode indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived. Major is represented by 1 and minor is 0.
         *
         * @example 0
         */
        Mode: number;
        AudioFeaturesObject: {
            /**
             * Format: float
             * @description A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.
             *
             * @example 0.00242
             */
            acousticness?: number;
            /**
             * @description A URL to access the full audio analysis of this track. An access token is required to access this data.
             *
             * @example https://api.spotify.com/v1/audio-analysis/2takcwOaAZWiXQijPHIx7B
             *
             */
            analysis_url?: string;
            /**
             * Format: float
             * @description Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.
             *
             * @example 0.585
             */
            danceability?: number;
            /**
             * @description The duration of the track in milliseconds.
             *
             * @example 237040
             */
            duration_ms?: number;
            /**
             * Format: float
             * @description Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.
             *
             * @example 0.842
             */
            energy?: number;
            /**
             * @description The Spotify ID for the track.
             *
             * @example 2takcwOaAZWiXQijPHIx7B
             */
            id?: string;
            /**
             * Format: float
             * @description Predicts whether a track contains no vocals. "Ooh" and "aah" sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly "vocal". The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.
             *
             * @example 0.00686
             */
            instrumentalness?: number;
            key?: components["schemas"]["Key"];
            /**
             * Format: float
             * @description Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.
             *
             * @example 0.0866
             */
            liveness?: number;
            loudness?: components["schemas"]["Loudness"];
            mode?: components["schemas"]["Mode"];
            /**
             * Format: float
             * @description Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks.
             *
             * @example 0.0556
             */
            speechiness?: number;
            tempo?: components["schemas"]["Tempo"];
            time_signature?: components["schemas"]["TimeSignature"];
            /**
             * @description A link to the Web API endpoint providing full details of the track.
             *
             * @example https://api.spotify.com/v1/tracks/2takcwOaAZWiXQijPHIx7B
             *
             */
            track_href?: string;
            /**
             * @description The object type.
             *
             * @enum {string}
             */
            type?: "audio_features";
            /**
             * @description The Spotify URI for the track.
             *
             * @example spotify:track:2takcwOaAZWiXQijPHIx7B
             */
            uri?: string;
            /**
             * Format: float
             * @description A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).
             *
             * @example 0.428
             */
            valence?: number;
        };
        SimplifiedTrackObject: {
            /** @description The artists who performed the track. Each artist object includes a link in `href` to more detailed information about the artist. */
            artists?: components["schemas"]["SimplifiedArtistObject"][];
            /** @description A list of the countries in which the track can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.
             *      */
            available_markets?: string[];
            /** @description The disc number (usually `1` unless the album consists of more than one disc). */
            disc_number?: number;
            /** @description The track length in milliseconds. */
            duration_ms?: number;
            /** @description Whether or not the track has explicit lyrics ( `true` = yes it does; `false` = no it does not OR unknown). */
            explicit?: boolean;
            /** @description External URLs for this track.
             *      */
            external_urls?: components["schemas"]["ExternalUrlObject"];
            /** @description A link to the Web API endpoint providing full details of the track. */
            href?: string;
            /** @description The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.
             *      */
            id?: string;
            /** @description Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking/) is applied. If `true`, the track is playable in the given market. Otherwise `false`.
             *      */
            is_playable?: boolean;
            /** @description Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking/) is applied and is only part of the response if the track linking, in fact, exists. The requested track has been replaced with a different track. The track in the `linked_from` object contains information about the originally requested track. */
            linked_from?: components["schemas"]["LinkedTrackObject"];
            /** @description Included in the response when a content restriction is applied.
             *      */
            restrictions?: components["schemas"]["TrackRestrictionObject"];
            /** @description The name of the track. */
            name?: string;
            /** @description A URL to a 30 second preview (MP3 format) of the track.
             *      */
            preview_url?: string | null;
            /** @description The number of the track. If an album has several discs, the track number is the number on the specified disc.
             *      */
            track_number?: number;
            /** @description The object type: "track".
             *      */
            type?: string;
            /** @description The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the track.
             *      */
            uri?: string;
            /** @description Whether or not the track is from a local file.
             *      */
            is_local?: boolean;
        };
        DeviceObject: {
            /** @description The device ID. This ID is unique and persistent to some extent. However, this is not guaranteed and any cached `device_id` should periodically be cleared out and refetched as necessary. */
            id?: string | null;
            /** @description If this device is the currently active device. */
            is_active?: boolean;
            /** @description If this device is currently in a private session. */
            is_private_session?: boolean;
            /** @description Whether controlling this device is restricted. At present if this is "true" then no Web API commands will be accepted by this device. */
            is_restricted?: boolean;
            /**
             * @description A human-readable name for the device. Some devices have a name that the user can configure (e.g. \"Loudest speaker\") and some devices have a generic name associated with the manufacturer or device model.
             * @example Kitchen speaker
             */
            name?: string;
            /**
             * @description Device type, such as "computer", "smartphone" or "speaker".
             * @example computer
             */
            type?: string;
            /**
             * @description The current volume in percent.
             * @example 59
             */
            volume_percent?: number | null;
            /** @description If this device can be used to set the volume. */
            supports_volume?: boolean;
        };
        CursorObject: {
            /** @description The cursor to use as key to find the next page of items. */
            after?: string;
            /** @description The cursor to use as key to find the previous page of items. */
            before?: string;
        };
        CursorPagingObject: {
            /** @description A link to the Web API endpoint returning the full result of the request. */
            href?: string;
            /** @description The maximum number of items in the response (as set in the query or by default). */
            limit?: number;
            /** @description URL to the next page of items. ( `null` if none) */
            next?: string;
            /** @description The cursors used to find the next set of items. */
            cursors?: components["schemas"]["CursorObject"];
            /** @description The total number of items available to return. */
            total?: number;
        };
        CursorPagingPlayHistoryObject: components["schemas"]["CursorPagingObject"] & {
            items?: components["schemas"]["PlayHistoryObject"][];
        };
        CursorPagingSimplifiedArtistObject: components["schemas"]["CursorPagingObject"] & {
            items?: components["schemas"]["ArtistObject"][];
        };
        PagingObject: {
            /**
             * @description A link to the Web API endpoint returning the full result of the request
             *
             * @example https://api.spotify.com/v1/me/shows?offset=0&limit=20
             *
             */
            href: string;
            /**
             * @description The maximum number of items in the response (as set in the query or by default).
             *
             * @example 20
             */
            limit: number;
            /**
             * @description URL to the next page of items. ( `null` if none)
             *
             * @example https://api.spotify.com/v1/me/shows?offset=1&limit=1
             */
            next: string | null;
            /**
             * @description The offset of the items returned (as set in the query or by default)
             *
             * @example 0
             */
            offset: number;
            /**
             * @description URL to the previous page of items. ( `null` if none)
             *
             * @example https://api.spotify.com/v1/me/shows?offset=1&limit=1
             */
            previous: string | null;
            /**
             * @description The total number of items available to return.
             *
             * @example 4
             */
            total: number;
        };
        PagingPlaylistObject: components["schemas"]["PagingObject"] & {
            items?: components["schemas"]["SimplifiedPlaylistObject"][];
        };
        PagingFeaturedPlaylistObject: {
            /**
             * @description The localized message of a playlist.
             *
             * @example Popular Playlists
             */
            message?: string;
            playlists?: components["schemas"]["PagingPlaylistObject"];
        };
        PagingArtistDiscographyAlbumObject: components["schemas"]["PagingObject"] & {
            items?: components["schemas"]["ArtistDiscographyAlbumObject"][];
        };
        PagingSimplifiedAlbumObject: components["schemas"]["PagingObject"] & {
            items?: components["schemas"]["SimplifiedAlbumObject"][];
        };
        PagingSavedAlbumObject: components["schemas"]["PagingObject"] & {
            items?: components["schemas"]["SavedAlbumObject"][];
        };
        PagingSimplifiedTrackObject: components["schemas"]["PagingObject"] & {
            items?: components["schemas"]["SimplifiedTrackObject"][];
        };
        PagingSavedTrackObject: components["schemas"]["PagingObject"] & {
            items?: components["schemas"]["SavedTrackObject"][];
        };
        PagingTrackObject: components["schemas"]["PagingObject"] & {
            items?: components["schemas"]["TrackObject"][];
        };
        PagingPlaylistTrackObject: components["schemas"]["PagingObject"] & {
            items?: components["schemas"]["PlaylistTrackObject"][];
        };
        PagingSimplifiedShowObject: components["schemas"]["PagingObject"] & {
            items?: components["schemas"]["SimplifiedShowObject"][];
        };
        PagingSavedShowObject: components["schemas"]["PagingObject"] & {
            items?: components["schemas"]["SavedShowObject"][];
        };
        PagingSimplifiedEpisodeObject: components["schemas"]["PagingObject"] & {
            items?: components["schemas"]["SimplifiedEpisodeObject"][];
        };
        PagingSavedEpisodeObject: components["schemas"]["PagingObject"] & {
            items?: components["schemas"]["SavedEpisodeObject"][];
        };
        PagingSimplifiedAudiobookObject: components["schemas"]["PagingObject"] & {
            items?: components["schemas"]["SimplifiedAudiobookObject"][];
        };
        PagingArtistObject: components["schemas"]["PagingObject"] & {
            items?: components["schemas"]["ArtistObject"][];
        };
        PagingSimplifiedChapterObject: components["schemas"]["PagingObject"] & {
            items?: components["schemas"]["SimplifiedChapterObject"][];
        };
        RecommendationsObject: {
            /** @description An array of recommendation seed objects.
             *      */
            seeds: components["schemas"]["RecommendationSeedObject"][];
            /** @description An array of track object (simplified) ordered according to the parameters supplied.
             *      */
            tracks: components["schemas"]["TrackObject"][];
        };
        RecommendationSeedObject: {
            /** @description The number of tracks available after min\_\* and max\_\* filters have been applied.
             *      */
            afterFilteringSize?: number;
            /** @description The number of tracks available after relinking for regional availability.
             *      */
            afterRelinkingSize?: number;
            /** @description A link to the full track or artist data for this seed. For tracks this will be a link to a Track Object. For artists a link to an Artist Object. For genre seeds, this value will be `null`.
             *      */
            href?: string;
            /** @description The id used to select this seed. This will be the same as the string used in the `seed_artists`, `seed_tracks` or `seed_genres` parameter.
             *      */
            id?: string;
            /** @description The number of recommended tracks available for this seed.
             *      */
            initialPoolSize?: number;
            /** @description The entity type of this seed. One of `artist`, `track` or `genre`.
             *      */
            type?: string;
        };
        SavedAlbumObject: {
            /**
             * Format: date-time
             * @description The date and time the album was saved
             *     Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.
             *     If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.
             *
             */
            added_at?: string;
            /** @description Information about the album. */
            album?: components["schemas"]["AlbumObject"];
        };
        SavedTrackObject: {
            /**
             * Format: date-time
             * @description The date and time the track was saved.
             *     Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.
             *     If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.
             *
             */
            added_at?: string;
            /** @description Information about the track. */
            track?: components["schemas"]["TrackObject"];
        };
        SavedEpisodeObject: {
            /**
             * Format: date-time
             * @description The date and time the episode was saved.
             *     Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.
             *
             */
            added_at?: string;
            /** @description Information about the episode. */
            episode?: components["schemas"]["EpisodeObject"];
        };
        SavedShowObject: {
            /**
             * Format: date-time
             * @description The date and time the show was saved.
             *     Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.
             *     If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.
             *
             */
            added_at?: string;
            /** @description Information about the show. */
            show?: components["schemas"]["SimplifiedShowObject"];
        };
        PlaylistObject: {
            /** @description `true` if the owner allows other users to modify the playlist.
             *      */
            collaborative?: boolean;
            /** @description The playlist description. _Only returned for modified, verified playlists, otherwise_ `null`.
             *      */
            description?: string | null;
            /** @description Known external URLs for this playlist.
             *      */
            external_urls?: components["schemas"]["ExternalUrlObject"];
            /** @description Information about the followers of the playlist. */
            followers?: components["schemas"]["FollowersObject"];
            /** @description A link to the Web API endpoint providing full details of the playlist.
             *      */
            href?: string;
            /** @description The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the playlist.
             *      */
            id?: string;
            /** @description Images for the playlist. The array may be empty or contain up to three images. The images are returned by size in descending order. See [Working with Playlists](/documentation/web-api/concepts/playlists). _**Note**: If returned, the source URL for the image (`url`) is temporary and will expire in less than a day._
             *      */
            images?: components["schemas"]["ImageObject"][];
            /** @description The name of the playlist.
             *      */
            name?: string;
            /** @description The user who owns the playlist
             *      */
            owner?: components["schemas"]["PlaylistOwnerObject"];
            /** @description The playlist's public/private status (if it is added to the user's profile): `true` the playlist is public, `false` the playlist is private, `null` the playlist status is not relevant. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)
             *      */
            public?: boolean;
            /** @description The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version
             *      */
            snapshot_id?: string;
            /** @description The tracks of the playlist.
             *      */
            tracks?: components["schemas"]["PagingPlaylistTrackObject"];
            /** @description The object type: "playlist"
             *      */
            type?: string;
            /** @description The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the playlist.
             *      */
            uri?: string;
        };
        SimplifiedPlaylistObject: {
            /** @description `true` if the owner allows other users to modify the playlist.
             *      */
            collaborative?: boolean;
            /** @description The playlist description. _Only returned for modified, verified playlists, otherwise_ `null`.
             *      */
            description?: string;
            /** @description Known external URLs for this playlist.
             *      */
            external_urls?: components["schemas"]["ExternalUrlObject"];
            /** @description A link to the Web API endpoint providing full details of the playlist.
             *      */
            href?: string;
            /** @description The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the playlist.
             *      */
            id?: string;
            /** @description Images for the playlist. The array may be empty or contain up to three images. The images are returned by size in descending order. See [Working with Playlists](/documentation/web-api/concepts/playlists). _**Note**: If returned, the source URL for the image (`url`) is temporary and will expire in less than a day._
             *      */
            images?: components["schemas"]["ImageObject"][];
            /** @description The name of the playlist.
             *      */
            name?: string;
            /** @description The user who owns the playlist
             *      */
            owner?: components["schemas"]["PlaylistOwnerObject"];
            /** @description The playlist's public/private status (if it is added to the user's profile): `true` the playlist is public, `false` the playlist is private, `null` the playlist status is not relevant. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)
             *      */
            public?: boolean;
            /** @description The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version
             *      */
            snapshot_id?: string;
            /** @description A collection containing a link ( `href` ) to the Web API endpoint where full details of the playlist's tracks can be retrieved, along with the `total` number of tracks in the playlist. Note, a track object may be `null`. This can happen if a track is no longer available.
             *      */
            tracks?: components["schemas"]["PlaylistTracksRefObject"];
            /** @description The object type: "playlist"
             *      */
            type?: string;
            /** @description The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the playlist.
             *      */
            uri?: string;
        };
        PlaylistTracksRefObject: {
            /** @description A link to the Web API endpoint where full details of the playlist's tracks can be retrieved.
             *      */
            href?: string;
            /** @description Number of tracks in the playlist.
             *      */
            total?: number;
        };
        PlaylistUserObject: {
            /** @description Known public external URLs for this user.
             *      */
            external_urls?: components["schemas"]["ExternalUrlObject"];
            /** @description Information about the followers of this user.
             *      */
            followers?: components["schemas"]["FollowersObject"];
            /** @description A link to the Web API endpoint for this user.
             *      */
            href?: string;
            /** @description The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for this user.
             *      */
            id?: string;
            /**
             * @description The object type.
             *
             * @enum {string}
             */
            type?: "user";
            /** @description The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for this user.
             *      */
            uri?: string;
        };
        PlaylistOwnerObject: components["schemas"]["PlaylistUserObject"] & {
            /** @description The name displayed on the user's profile. `null` if not available.
             *      */
            display_name?: string | null;
        };
        CategoryObject: {
            /** @description A link to the Web API endpoint returning full details of the category.
             *      */
            href: string;
            /** @description The category icon, in various sizes.
             *      */
            icons: components["schemas"]["ImageObject"][];
            /**
             * @description The [Spotify category ID](/documentation/web-api/concepts/spotify-uris-ids) of the category.
             *
             * @example equal
             */
            id: string;
            /**
             * @description The name of the category.
             *
             * @example EQUAL
             */
            name: string;
        };
        TrackObject: {
            /** @description The album on which the track appears. The album object includes a link in `href` to full information about the album.
             *      */
            album?: components["schemas"]["SimplifiedAlbumObject"];
            /** @description The artists who performed the track. Each artist object includes a link in `href` to more detailed information about the artist.
             *      */
            artists?: components["schemas"]["SimplifiedArtistObject"][];
            /** @description A list of the countries in which the track can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.
             *      */
            available_markets?: string[];
            /** @description The disc number (usually `1` unless the album consists of more than one disc).
             *      */
            disc_number?: number;
            /** @description The track length in milliseconds.
             *      */
            duration_ms?: number;
            /** @description Whether or not the track has explicit lyrics ( `true` = yes it does; `false` = no it does not OR unknown).
             *      */
            explicit?: boolean;
            /** @description Known external IDs for the track.
             *      */
            external_ids?: components["schemas"]["ExternalIdObject"];
            /** @description Known external URLs for this track.
             *      */
            external_urls?: components["schemas"]["ExternalUrlObject"];
            /** @description A link to the Web API endpoint providing full details of the track.
             *      */
            href?: string;
            /** @description The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.
             *      */
            id?: string;
            /** @description Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking) is applied. If `true`, the track is playable in the given market. Otherwise `false`.
             *      */
            is_playable?: boolean;
            /** @description Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking) is applied, and the requested track has been replaced with different track. The track in the `linked_from` object contains information about the originally requested track.
             *      */
            linked_from?: Record<string, never>;
            /** @description Included in the response when a content restriction is applied.
             *      */
            restrictions?: components["schemas"]["TrackRestrictionObject"];
            /** @description The name of the track.
             *      */
            name?: string;
            /** @description The popularity of the track. The value will be between 0 and 100, with 100 being the most popular.<br/>The popularity of a track is a value between 0 and 100, with 100 being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are.<br/>Generally speaking, songs that are being played a lot now will have a higher popularity than songs that were played a lot in the past. Duplicate tracks (e.g. the same track from a single and an album) are rated independently. Artist and album popularity is derived mathematically from track popularity. _**Note**: the popularity value may lag actual popularity by a few days: the value is not updated in real time._
             *      */
            popularity?: number;
            /** @description A link to a 30 second preview (MP3 format) of the track. Can be `null`
             *      */
            preview_url?: string | null;
            /** @description The number of the track. If an album has several discs, the track number is the number on the specified disc.
             *      */
            track_number?: number;
            /**
             * @description The object type: "track".
             *      (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            type: "TrackObject";
            /** @description The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the track.
             *      */
            uri?: string;
            /** @description Whether or not the track is from a local file.
             *      */
            is_local?: boolean;
        };
        EpisodeObject: components["schemas"]["EpisodeBase"] & {
            /** @description The show on which the episode belongs.
             *      */
            show: components["schemas"]["SimplifiedShowObject"];
        } & {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "EpisodeObject";
        };
        SimplifiedEpisodeObject: components["schemas"]["EpisodeBase"] & Record<string, never>;
        EpisodeBase: {
            /**
             * @description A URL to a 30 second preview (MP3 format) of the episode. `null` if not available.
             *
             * @example https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17
             */
            audio_preview_url: string | null;
            /**
             * @description A description of the episode. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.
             *
             * @example A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.
             *
             */
            description: string;
            /**
             * @description A description of the episode. This field may contain HTML tags.
             *
             * @example <p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>
             *
             */
            html_description: string;
            /**
             * @description The episode length in milliseconds.
             *
             * @example 1686230
             */
            duration_ms: number;
            /** @description Whether or not the episode has explicit content (true = yes it does; false = no it does not OR unknown).
             *      */
            explicit: boolean;
            /** @description External URLs for this episode.
             *      */
            external_urls: components["schemas"]["ExternalUrlObject"];
            /**
             * @description A link to the Web API endpoint providing full details of the episode.
             *
             * @example https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ
             */
            href: string;
            /**
             * @description The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the episode.
             *
             * @example 5Xt5DXGzch68nYYamXrNxZ
             */
            id: string;
            /** @description The cover art for the episode in various sizes, widest first.
             *      */
            images: components["schemas"]["ImageObject"][];
            /** @description True if the episode is hosted outside of Spotify's CDN.
             *      */
            is_externally_hosted: boolean;
            /** @description True if the episode is playable in the given market. Otherwise false.
             *      */
            is_playable: boolean;
            /**
             * @deprecated
             * @description The language used in the episode, identified by a [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code. This field is deprecated and might be removed in the future. Please use the `languages` field instead.
             *
             * @example en
             */
            language?: string;
            /**
             * @description A list of the languages used in the episode, identified by their [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639) code.
             *
             * @example [
             *       "fr",
             *       "en"
             *     ]
             */
            languages: string[];
            /**
             * @description The name of the episode.
             *
             * @example Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators
             *
             */
            name: string;
            /**
             * @description The date the episode was first released, for example `"1981-12-15"`. Depending on the precision, it might be shown as `"1981"` or `"1981-12"`.
             *
             * @example 1981-12-15
             */
            release_date: string;
            /**
             * @description The precision with which `release_date` value is known.
             *
             * @example day
             * @enum {string}
             */
            release_date_precision: "year" | "month" | "day";
            /** @description The user's most recent position in the episode. Set if the supplied access token is a user token and has the scope 'user-read-playback-position'.
             *      */
            resume_point?: components["schemas"]["ResumePointObject"];
            /**
             * @description The object type.
             *
             * @enum {string}
             */
            type: "episode";
            /**
             * @description The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the episode.
             *
             * @example spotify:episode:0zLhl3WsOCQHbe1BPTiHgr
             */
            uri: string;
            /** @description Included in the response when a content restriction is applied.
             *      */
            restrictions?: components["schemas"]["EpisodeRestrictionObject"];
        };
        ResumePointObject: {
            /** @description Whether or not the episode has been fully played by the user.
             *      */
            fully_played?: boolean;
            /** @description The user's most recent position in the episode in milliseconds.
             *      */
            resume_position_ms?: number;
        };
        ShowBase: {
            /** @description A list of the countries in which the show can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.
             *      */
            available_markets: string[];
            /** @description The copyright statements of the show.
             *      */
            copyrights: components["schemas"]["CopyrightObject"][];
            /** @description A description of the show. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.
             *      */
            description: string;
            /** @description A description of the show. This field may contain HTML tags.
             *      */
            html_description: string;
            /** @description Whether or not the show has explicit content (true = yes it does; false = no it does not OR unknown).
             *      */
            explicit: boolean;
            /** @description External URLs for this show.
             *      */
            external_urls: components["schemas"]["ExternalUrlObject"];
            /** @description A link to the Web API endpoint providing full details of the show.
             *      */
            href: string;
            /** @description The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the show.
             *      */
            id: string;
            /** @description The cover art for the show in various sizes, widest first.
             *      */
            images: components["schemas"]["ImageObject"][];
            /** @description True if all of the shows episodes are hosted outside of Spotify's CDN. This field might be `null` in some cases.
             *      */
            is_externally_hosted: boolean;
            /** @description A list of the languages used in the show, identified by their [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code.
             *      */
            languages: string[];
            /** @description The media type of the show.
             *      */
            media_type: string;
            /** @description The name of the episode.
             *      */
            name: string;
            /** @description The publisher of the show.
             *      */
            publisher: string;
            /**
             * @description The object type.
             *
             * @enum {string}
             */
            type: "show";
            /** @description The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the show.
             *      */
            uri: string;
            /** @description The total number of episodes in the show.
             *      */
            total_episodes: number;
        };
        ShowObject: components["schemas"]["ShowBase"] & {
            /** @description The episodes of the show.
             *      */
            episodes: components["schemas"]["PagingSimplifiedEpisodeObject"];
        };
        SimplifiedShowObject: components["schemas"]["ShowBase"] & Record<string, never>;
        AudiobookBase: {
            /** @description The author(s) for the audiobook.
             *      */
            authors: components["schemas"]["AuthorObject"][];
            /** @description A list of the countries in which the audiobook can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.
             *      */
            available_markets: string[];
            /** @description The copyright statements of the audiobook.
             *      */
            copyrights: components["schemas"]["CopyrightObject"][];
            /** @description A description of the audiobook. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.
             *      */
            description: string;
            /** @description A description of the audiobook. This field may contain HTML tags.
             *      */
            html_description: string;
            /**
             * @description The edition of the audiobook.
             *
             * @example Unabridged
             */
            edition?: string;
            /** @description Whether or not the audiobook has explicit content (true = yes it does; false = no it does not OR unknown).
             *      */
            explicit: boolean;
            /** @description External URLs for this audiobook.
             *      */
            external_urls: components["schemas"]["ExternalUrlObject"];
            /** @description A link to the Web API endpoint providing full details of the audiobook.
             *      */
            href: string;
            /** @description The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the audiobook.
             *      */
            id: string;
            /** @description The cover art for the audiobook in various sizes, widest first.
             *      */
            images: components["schemas"]["ImageObject"][];
            /** @description A list of the languages used in the audiobook, identified by their [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code.
             *      */
            languages: string[];
            /** @description The media type of the audiobook.
             *      */
            media_type: string;
            /** @description The name of the audiobook.
             *      */
            name: string;
            /** @description The narrator(s) for the audiobook.
             *      */
            narrators: components["schemas"]["NarratorObject"][];
            /** @description The publisher of the audiobook.
             *      */
            publisher: string;
            /**
             * @description The object type.
             *
             * @enum {string}
             */
            type: "audiobook";
            /** @description The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the audiobook.
             *      */
            uri: string;
            /** @description The number of chapters in this audiobook.
             *      */
            total_chapters: number;
        };
        AudiobookObject: components["schemas"]["AudiobookBase"] & {
            /** @description The chapters of the audiobook.
             *      */
            chapters: components["schemas"]["PagingSimplifiedChapterObject"];
        };
        SimplifiedAudiobookObject: components["schemas"]["AudiobookBase"] & Record<string, never>;
        AlbumBase: {
            /**
             * @description The type of the album.
             *
             * @example compilation
             * @enum {string}
             */
            album_type: "album" | "single" | "compilation";
            /**
             * @description The number of tracks in the album.
             * @example 9
             */
            total_tracks: number;
            /**
             * @description The markets in which the album is available: [ISO 3166-1 alpha-2 country codes](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). _**NOTE**: an album is considered available in a market when at least 1 of its tracks is available in that market._
             *
             * @example [
             *       "CA",
             *       "BR",
             *       "IT"
             *     ]
             */
            available_markets: string[];
            /** @description Known external URLs for this album.
             *      */
            external_urls: components["schemas"]["ExternalUrlObject"];
            /** @description A link to the Web API endpoint providing full details of the album.
             *      */
            href: string;
            /**
             * @description The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the album.
             *
             * @example 2up3OPMp9Tb4dAKM2erWXQ
             */
            id: string;
            /** @description The cover art for the album in various sizes, widest first.
             *      */
            images: components["schemas"]["ImageObject"][];
            /** @description The name of the album. In case of an album takedown, the value may be an empty string.
             *      */
            name: string;
            /**
             * @description The date the album was first released.
             *
             * @example 1981-12
             */
            release_date: string;
            /**
             * @description The precision with which `release_date` value is known.
             *
             * @example year
             * @enum {string}
             */
            release_date_precision: "year" | "month" | "day";
            /** @description Included in the response when a content restriction is applied.
             *      */
            restrictions?: components["schemas"]["AlbumRestrictionObject"];
            /**
             * @description The object type.
             *
             * @enum {string}
             */
            type: "album";
            /**
             * @description The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the album.
             *
             * @example spotify:album:2up3OPMp9Tb4dAKM2erWXQ
             */
            uri: string;
        };
        SimplifiedAlbumObject: components["schemas"]["AlbumBase"] & {
            /** @description The artists of the album. Each artist object includes a link in `href` to more detailed information about the artist.
             *      */
            artists: components["schemas"]["SimplifiedArtistObject"][];
        };
        ArtistDiscographyAlbumObject: components["schemas"]["SimplifiedAlbumObject"] & {
            /**
             * @description This field describes the relationship between the artist and the album.
             *
             * @example compilation
             * @enum {string}
             */
            album_group: "album" | "single" | "compilation" | "appears_on";
        };
        ChapterObject: components["schemas"]["ChapterBase"] & {
            /** @description The audiobook for which the chapter belongs.
             *      */
            audiobook: components["schemas"]["SimplifiedAudiobookObject"];
        };
        SimplifiedChapterObject: components["schemas"]["ChapterBase"] & Record<string, never>;
        ChapterBase: {
            /**
             * @description A URL to a 30 second preview (MP3 format) of the chapter. `null` if not available.
             *
             * @example https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17
             */
            audio_preview_url: string | null;
            /** @description A list of the countries in which the chapter can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.
             *      */
            available_markets?: string[];
            /**
             * @description The number of the chapter
             *
             * @example 1
             */
            chapter_number: number;
            /**
             * @description A description of the chapter. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.
             *
             * @example We kept on ascending, with occasional periods of quick descent, but in the main always ascending. Suddenly, I became conscious of the fact that the driver was in the act of pulling up the horses in the courtyard of a vast ruined castle, from whose tall black windows came no ray of light, and whose broken battlements showed a jagged line against the moonlit sky.
             *
             */
            description: string;
            /**
             * @description A description of the chapter. This field may contain HTML tags.
             *
             * @example <p>We kept on ascending, with occasional periods of quick descent, but in the main always ascending. Suddenly, I became conscious of the fact that the driver was in the act of pulling up the horses in the courtyard of a vast ruined castle, from whose tall black windows came no ray of light, and whose broken battlements showed a jagged line against the moonlit sky.</p>
             *
             */
            html_description: string;
            /**
             * @description The chapter length in milliseconds.
             *
             * @example 1686230
             */
            duration_ms: number;
            /** @description Whether or not the chapter has explicit content (true = yes it does; false = no it does not OR unknown).
             *      */
            explicit: boolean;
            /** @description External URLs for this chapter.
             *      */
            external_urls: components["schemas"]["ExternalUrlObject"];
            /**
             * @description A link to the Web API endpoint providing full details of the chapter.
             *
             * @example https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ
             */
            href: string;
            /**
             * @description The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the chapter.
             *
             * @example 5Xt5DXGzch68nYYamXrNxZ
             */
            id: string;
            /** @description The cover art for the chapter in various sizes, widest first.
             *      */
            images: components["schemas"]["ImageObject"][];
            /** @description True if the chapter is playable in the given market. Otherwise false.
             *      */
            is_playable: boolean;
            /**
             * @description A list of the languages used in the chapter, identified by their [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639) code.
             *
             * @example [
             *       "fr",
             *       "en"
             *     ]
             */
            languages: string[];
            /**
             * @description The name of the chapter.
             *
             * @example Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators
             *
             */
            name: string;
            /**
             * @description The date the chapter was first released, for example `"1981-12-15"`. Depending on the precision, it might be shown as `"1981"` or `"1981-12"`.
             *
             * @example 1981-12-15
             */
            release_date: string;
            /**
             * @description The precision with which `release_date` value is known.
             *
             * @example day
             * @enum {string}
             */
            release_date_precision: "year" | "month" | "day";
            /** @description The user's most recent position in the chapter. Set if the supplied access token is a user token and has the scope 'user-read-playback-position'.
             *      */
            resume_point?: components["schemas"]["ResumePointObject"];
            /**
             * @description The object type.
             *
             * @enum {string}
             */
            type: "episode";
            /**
             * @description The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the chapter.
             *
             * @example spotify:episode:0zLhl3WsOCQHbe1BPTiHgr
             */
            uri: string;
            /** @description Included in the response when a content restriction is applied.
             *      */
            restrictions?: components["schemas"]["ChapterRestrictionObject"];
        };
        AlbumObject: components["schemas"]["AlbumBase"] & {
            /** @description The artists of the album. Each artist object includes a link in `href` to more detailed information about the artist.
             *      */
            artists: components["schemas"]["SimplifiedArtistObject"][];
            /** @description The tracks of the album.
             *      */
            tracks: components["schemas"]["PagingSimplifiedTrackObject"];
            /** @description The copyright statements of the album.
             *      */
            copyrights: components["schemas"]["CopyrightObject"][];
            /** @description Known external IDs for the album.
             *      */
            external_ids: components["schemas"]["ExternalIdObject"];
            /**
             * @description A list of the genres the album is associated with. If not yet classified, the array is empty.
             *
             * @example [
             *       "Egg punk",
             *       "Noise rock"
             *     ]
             */
            genres: string[];
            /** @description The label associated with the album.
             *      */
            label: string;
            /** @description The popularity of the album. The value will be between 0 and 100, with 100 being the most popular.
             *      */
            popularity: number;
        };
        ContextObject: {
            /** @description The object type, e.g. "artist", "playlist", "album", "show".
             *      */
            type?: string;
            /** @description A link to the Web API endpoint providing full details of the track. */
            href?: string;
            /** @description External URLs for this context. */
            external_urls?: components["schemas"]["ExternalUrlObject"];
            /** @description The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the context.
             *      */
            uri?: string;
        };
        CopyrightObject: {
            /** @description The copyright text for this content.
             *      */
            text?: string;
            /** @description The type of copyright: `C` = the copyright, `P` = the sound recording (performance) copyright.
             *      */
            type?: string;
        };
        AuthorObject: {
            /** @description The name of the author.
             *      */
            name?: string;
        };
        NarratorObject: {
            /** @description The name of the Narrator.
             *      */
            name?: string;
        };
        ExternalIdObject: {
            /** @description [International Standard Recording Code](http://en.wikipedia.org/wiki/International_Standard_Recording_Code)
             *      */
            isrc?: string;
            /** @description [International Article Number](http://en.wikipedia.org/wiki/International_Article_Number_%28EAN%29)
             *      */
            ean?: string;
            /** @description [Universal Product Code](http://en.wikipedia.org/wiki/Universal_Product_Code)
             *      */
            upc?: string;
        };
        ExternalUrlObject: {
            /** @description The [Spotify URL](/documentation/web-api/concepts/spotify-uris-ids) for the object.
             *      */
            spotify?: string;
        };
        FollowersObject: {
            /** @description This will always be set to null, as the Web API does not support it at the moment.
             *      */
            href?: string | null;
            /** @description The total number of followers.
             *      */
            total?: number;
        };
        ImageObject: {
            /**
             * @description The source URL of the image.
             *
             * @example https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228
             *
             */
            url: string;
            /**
             * @description The image height in pixels.
             *
             * @example 300
             */
            height: number | null;
            /**
             * @description The image width in pixels.
             *
             * @example 300
             */
            width: number | null;
        };
        ExplicitContentSettingsObject: {
            /** @description When `true`, indicates that explicit content should not be played.
             *      */
            filter_enabled?: boolean;
            /** @description When `true`, indicates that the explicit content setting is locked and can't be changed by the user.
             *      */
            filter_locked?: boolean;
        };
    };
    responses: {
        /** @description Bad or expired token. This can happen if the user revoked a token or
         *     the access token has expired. You should re-authenticate the user.
         *      */
        Unauthorized: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    error: components["schemas"]["ErrorObject"];
                };
            };
        };
        /** @description Bad OAuth request (wrong consumer key, bad nonce, expired
         *     timestamp...). Unfortunately, re-authenticating the user won't help here.
         *      */
        Forbidden: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    error: components["schemas"]["ErrorObject"];
                };
            };
        };
        /** @description The requested resource cannot be found.
         *      */
        NotFound: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    error: components["schemas"]["ErrorObject"];
                };
            };
        };
        /** @description The request contains malformed data in path, query parameters, or body.
         *      */
        BadRequest: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    error: components["schemas"]["ErrorObject"];
                };
            };
        };
        /** @description The app has exceeded its rate limits.
         *      */
        TooManyRequests: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    error: components["schemas"]["ErrorObject"];
                };
            };
        };
        /** @description A set of albums */
        ManyAlbums: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    albums: components["schemas"]["AlbumObject"][];
                };
            };
        };
        /** @description A set of audiobooks. If one of the requested audiobooks is unavailable then you'll find a `null` item in the `audiobooks` array where the audiobook object would otherwise be. */
        ManyAudiobooks: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    audiobooks: components["schemas"]["AudiobookObject"][];
                };
            };
        };
        /** @description A set of chapters */
        ManyChapters: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    chapters: components["schemas"]["ChapterObject"][];
                };
            };
        };
        /** @description A set of devices */
        ManyDevices: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    devices: components["schemas"]["DeviceObject"][];
                };
            };
        };
        /** @description A paged set of albums */
        PagedAlbums: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    albums: components["schemas"]["PagingSimplifiedAlbumObject"];
                };
            };
        };
        /** @description A paged set of playlists */
        PagedPlaylists: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["PagingPlaylistObject"];
            };
        };
        /** @description A paged set of playlists */
        PagedFeaturedPlaylists: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["PagingFeaturedPlaylistObject"];
            };
        };
        /** @description A paged set of categories */
        PagedCategories: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    categories: components["schemas"]["PagingObject"] & {
                        items?: components["schemas"]["CategoryObject"][];
                    };
                };
            };
        };
        /** @description A paged set of artists */
        CursorPagedArtists: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    artists: components["schemas"]["CursorPagingSimplifiedArtistObject"];
                };
            };
        };
        /** @description A paged set of tracks */
        CursorPagedPlayHistory: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["CursorPagingPlayHistoryObject"];
            };
        };
        /** @description A set of artists */
        ManyArtists: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    artists: components["schemas"]["ArtistObject"][];
                };
            };
        };
        /** @description A set of audio features */
        ManyAudioFeatures: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    audio_features: components["schemas"]["AudioFeaturesObject"][];
                };
            };
        };
        /** @description A set of episodes */
        ManyEpisodes: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    episodes: components["schemas"]["EpisodeObject"][];
                };
            };
        };
        /** @description A set of genres */
        ManyGenres: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** @example [
                     *       "alternative",
                     *       "samba"
                     *     ] */
                    genres: string[];
                };
            };
        };
        /** @description An episode */
        OneEpisode: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["EpisodeObject"];
            };
        };
        /** @description A Chapter */
        OneChapter: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ChapterObject"];
            };
        };
        /** @description An Audiobook */
        OneAudiobook: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["AudiobookObject"];
            };
        };
        /** @description An album */
        OneAlbum: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["AlbumObject"];
            };
        };
        /** @description A set of images */
        ArrayOfImages: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ImageObject"][];
            };
        };
        /** @description A user */
        OnePrivateUser: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["PrivateUserObject"];
            };
        };
        /** @description A user */
        OnePublicUser: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["PublicUserObject"];
            };
        };
        /** @description A track */
        OneTrack: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["TrackObject"];
            };
        };
        /** @description A show */
        OneShow: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ShowObject"];
            };
        };
        /** @description A category */
        OneCategory: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["CategoryObject"];
            };
        };
        /** @description A playlist */
        OnePlaylist: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["PlaylistObject"];
            };
        };
        /** @description Audio features for one track */
        OneAudioFeatures: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["AudioFeaturesObject"];
            };
        };
        /** @description Audio analysis for one track */
        OneAudioAnalysis: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["AudioAnalysisObject"];
            };
        };
        /** @description An artist */
        OneArtist: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["ArtistObject"];
            };
        };
        /** @description A set of tracks */
        ManyTracks: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    tracks: components["schemas"]["TrackObject"][];
                };
            };
        };
        /** @description A set of shows */
        ManySimplifiedShows: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    shows: components["schemas"]["SimplifiedShowObject"][];
                };
            };
        };
        /** @description Pages of tracks */
        PagingSimplifiedTrackObject: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["PagingSimplifiedTrackObject"];
            };
        };
        /** @description Pages of tracks */
        PagingSavedTrackObject: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["PagingSavedTrackObject"];
            };
        };
        /** @description Pages of tracks */
        PagingPlaylistTrackObject: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["PagingPlaylistTrackObject"];
            };
        };
        /** @description Pages of albums */
        PagingArtistDiscographyAlbumObject: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["PagingArtistDiscographyAlbumObject"];
            };
        };
        /** @description Pages of albums */
        PagingSavedAlbumObject: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["PagingSavedAlbumObject"];
            };
        };
        /** @description Pages of shows */
        PagingSavedShowObject: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["PagingSavedShowObject"];
            };
        };
        /** @description Pages of episodes */
        PagingSimplifiedEpisodeObject: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["PagingSimplifiedEpisodeObject"];
            };
        };
        /** @description Pages of episodes */
        PagingSavedEpisodeObject: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["PagingSavedEpisodeObject"];
            };
        };
        /** @description Pages of audiobooks */
        PagingSimplifiedAudiobookObject: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["PagingSimplifiedAudiobookObject"];
            };
        };
        /** @description Pages of chapters */
        PagingSimplifiedChapterObject: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["PagingSimplifiedChapterObject"];
            };
        };
        /** @description Pages of artists or tracks */
        PagingArtistOrTrackObject: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["PagingObject"] & {
                    items?: (components["schemas"]["ArtistObject"] | components["schemas"]["TrackObject"])[];
                };
            };
        };
        /** @description Search response */
        SearchItems: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    tracks?: components["schemas"]["PagingTrackObject"];
                    artists?: components["schemas"]["PagingArtistObject"];
                    albums?: components["schemas"]["PagingSimplifiedAlbumObject"];
                    playlists?: components["schemas"]["PagingPlaylistObject"];
                    shows?: components["schemas"]["PagingSimplifiedShowObject"];
                    episodes?: components["schemas"]["PagingSimplifiedEpisodeObject"];
                    audiobooks?: components["schemas"]["PagingSimplifiedAudiobookObject"];
                };
            };
        };
        /** @description A set of recommendations */
        OneRecommendations: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["RecommendationsObject"];
            };
        };
        /** @description Array of booleans */
        ArrayOfBooleans: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": boolean[];
            };
        };
        /** @description Array of boolean, containing a single boolean */
        SingletonArrayOfBoolean: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": boolean[];
            };
        };
        /** @description Information about the queue */
        Queue: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["QueueObject"];
            };
        };
        /** @description Information about playback */
        OneCurrentlyPlaying: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["CurrentlyPlayingContextObject"];
            };
        };
        /** @description Information about the currently playing track */
        OneCurrentlyPlayingTrack: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["CurrentlyPlayingContextObject"];
            };
        };
        /** @description A snapshot ID for the playlist */
        PlaylistSnapshotId: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** @example abc */
                    snapshot_id?: string;
                };
            };
        };
    };
    parameters: {
        PathAlbumId: string;
        PathPlaylistId: string;
        QueryMarket: string;
        QueryLimit: number;
        QueryOffset: number;
        QueryAdditionalTypes: string;
        QueryAlbumIds: string;
        PathArtistId: string;
        PathShowId: string;
        PathAudiobookId: string;
        QueryAudiobookIds: string;
        PathChapterId: string;
        QueryChapterIds: string;
        QueryTrackIds: string;
        QueryIncludeGroups: string;
        QueryShowIds: string;
        PathUserId: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    "get-an-album": {
        parameters: {
            query?: {
                market?: components["parameters"]["QueryMarket"];
            };
            header?: never;
            path: {
                id: components["parameters"]["PathAlbumId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["OneAlbum"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-multiple-albums": {
        parameters: {
            query: {
                ids: components["parameters"]["QueryAlbumIds"];
                market?: components["parameters"]["QueryMarket"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["ManyAlbums"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-an-albums-tracks": {
        parameters: {
            query?: {
                market?: components["parameters"]["QueryMarket"];
                limit?: components["parameters"]["QueryLimit"];
                offset?: components["parameters"]["QueryOffset"];
            };
            header?: never;
            path: {
                id: components["parameters"]["PathAlbumId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["PagingSimplifiedTrackObject"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-an-artist": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: components["parameters"]["PathArtistId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["OneArtist"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-multiple-artists": {
        parameters: {
            query: {
                ids: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["ManyArtists"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-an-artists-albums": {
        parameters: {
            query?: {
                include_groups?: components["parameters"]["QueryIncludeGroups"];
                market?: components["parameters"]["QueryMarket"];
                limit?: components["parameters"]["QueryLimit"];
                offset?: components["parameters"]["QueryOffset"];
            };
            header?: never;
            path: {
                id: components["parameters"]["PathArtistId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["PagingArtistDiscographyAlbumObject"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-an-artists-top-tracks": {
        parameters: {
            query?: {
                market?: components["parameters"]["QueryMarket"];
            };
            header?: never;
            path: {
                id: components["parameters"]["PathArtistId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["ManyTracks"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-an-artists-related-artists": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: components["parameters"]["PathArtistId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["ManyArtists"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-a-show": {
        parameters: {
            query?: {
                market?: components["parameters"]["QueryMarket"];
            };
            header?: never;
            path: {
                id: components["parameters"]["PathShowId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["OneShow"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-multiple-shows": {
        parameters: {
            query: {
                market?: components["parameters"]["QueryMarket"];
                ids: components["parameters"]["QueryShowIds"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["ManySimplifiedShows"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-a-shows-episodes": {
        parameters: {
            query?: {
                market?: components["parameters"]["QueryMarket"];
                limit?: components["parameters"]["QueryLimit"];
                offset?: components["parameters"]["QueryOffset"];
            };
            header?: never;
            path: {
                id: components["parameters"]["PathShowId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["PagingSimplifiedEpisodeObject"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-an-episode": {
        parameters: {
            query?: {
                market?: components["parameters"]["QueryMarket"];
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["OneEpisode"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-multiple-episodes": {
        parameters: {
            query: {
                ids: string;
                market?: components["parameters"]["QueryMarket"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["ManyEpisodes"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-an-audiobook": {
        parameters: {
            query?: {
                market?: components["parameters"]["QueryMarket"];
            };
            header?: never;
            path: {
                id: components["parameters"]["PathAudiobookId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["OneAudiobook"];
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-multiple-audiobooks": {
        parameters: {
            query: {
                ids: components["parameters"]["QueryAudiobookIds"];
                market?: components["parameters"]["QueryMarket"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["ManyAudiobooks"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-audiobook-chapters": {
        parameters: {
            query?: {
                market?: components["parameters"]["QueryMarket"];
                limit?: components["parameters"]["QueryLimit"];
                offset?: components["parameters"]["QueryOffset"];
            };
            header?: never;
            path: {
                id: components["parameters"]["PathAudiobookId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["PagingSimplifiedChapterObject"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-users-saved-audiobooks": {
        parameters: {
            query?: {
                limit?: components["parameters"]["QueryLimit"];
                offset?: components["parameters"]["QueryOffset"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["PagingSimplifiedAudiobookObject"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "save-audiobooks-user": {
        parameters: {
            query: {
                ids: components["parameters"]["QueryAudiobookIds"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Audiobook(s) are saved to the library */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "remove-audiobooks-user": {
        parameters: {
            query: {
                ids: components["parameters"]["QueryAudiobookIds"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Audiobook(s) have been removed from the library */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "check-users-saved-audiobooks": {
        parameters: {
            query: {
                ids: components["parameters"]["QueryAudiobookIds"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["ArrayOfBooleans"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-a-chapter": {
        parameters: {
            query?: {
                market?: components["parameters"]["QueryMarket"];
            };
            header?: never;
            path: {
                id: components["parameters"]["PathChapterId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["OneChapter"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-several-chapters": {
        parameters: {
            query: {
                ids: components["parameters"]["QueryChapterIds"];
                market?: components["parameters"]["QueryMarket"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["ManyChapters"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-track": {
        parameters: {
            query?: {
                market?: components["parameters"]["QueryMarket"];
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["OneTrack"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-several-tracks": {
        parameters: {
            query: {
                market?: components["parameters"]["QueryMarket"];
                ids: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["ManyTracks"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    search: {
        parameters: {
            query: {
                q: string;
                type: ("album" | "artist" | "playlist" | "track" | "show" | "episode" | "audiobook")[];
                market?: components["parameters"]["QueryMarket"];
                limit?: number;
                offset?: number;
                include_external?: "audio";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SearchItems"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-current-users-profile": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["OnePrivateUser"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-playlist": {
        parameters: {
            query?: {
                market?: components["parameters"]["QueryMarket"];
                fields?: string;
                additional_types?: components["parameters"]["QueryAdditionalTypes"];
            };
            header?: never;
            path: {
                playlist_id: components["parameters"]["PathPlaylistId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["OnePlaylist"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "change-playlist-details": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                playlist_id: components["parameters"]["PathPlaylistId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The new name for the playlist, for example `"My New Playlist Title"`
                     *      */
                    name?: string;
                    /** @description The playlist's public/private status (if it should be added to the user's profile or not): `true` the playlist will be public, `false` the playlist will be private, `null` the playlist status is not relevant. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)
                     *      */
                    public?: boolean;
                    /** @description If `true`, the playlist will become collaborative and other users will be able to modify the playlist in their Spotify client. <br/>
                     *     _**Note**: You can only set `collaborative` to `true` on non-public playlists._
                     *      */
                    collaborative?: boolean;
                    /** @description Value for playlist description as displayed in Spotify Clients and in the Web API.
                     *      */
                    description?: string;
                } & {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Playlist updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-playlists-tracks": {
        parameters: {
            query?: {
                market?: components["parameters"]["QueryMarket"];
                fields?: string;
                limit?: components["parameters"]["QueryLimit"];
                offset?: components["parameters"]["QueryOffset"];
                additional_types?: components["parameters"]["QueryAdditionalTypes"];
            };
            header?: never;
            path: {
                playlist_id: components["parameters"]["PathPlaylistId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["PagingPlaylistTrackObject"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "reorder-or-replace-playlists-tracks": {
        parameters: {
            query?: {
                uris?: string;
            };
            header?: never;
            path: {
                playlist_id: components["parameters"]["PathPlaylistId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    uris?: string[];
                    /** @description The position of the first item to be reordered.
                     *      */
                    range_start?: number;
                    /** @description The position where the items should be inserted.<br/>To reorder the items to the end of the playlist, simply set _insert_before_ to the position after the last item.<br/>Examples:<br/>To reorder the first item to the last position in a playlist with 10 items, set _range_start_ to 0, and _insert_before_ to 10.<br/>To reorder the last item in a playlist with 10 items to the start of the playlist, set _range_start_ to 9, and _insert_before_ to 0.
                     *      */
                    insert_before?: number;
                    /** @description The amount of items to be reordered. Defaults to 1 if not set.<br/>The range of items to be reordered begins from the _range_start_ position, and includes the _range_length_ subsequent items.<br/>Example:<br/>To move the items at index 9-10 to the start of the playlist, _range_start_ is set to 9, and _range_length_ is set to 2.
                     *      */
                    range_length?: number;
                    /** @description The playlist's snapshot ID against which you want to make the changes.
                     *      */
                    snapshot_id?: string;
                } & {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            200: components["responses"]["PlaylistSnapshotId"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "add-tracks-to-playlist": {
        parameters: {
            query?: {
                position?: number;
                uris?: string;
            };
            header?: never;
            path: {
                playlist_id: components["parameters"]["PathPlaylistId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description A JSON array of the [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to add. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M", "spotify:episode:512ojhOuo1ktJprKbVcKyQ"]}`<br/>A maximum of 100 items can be added in one request. _**Note**: if the `uris` parameter is present in the query string, any URIs listed here in the body will be ignored._
                     *      */
                    uris?: string[];
                    /** @description The position to insert the items, a zero-based index. For example, to insert the items in the first position: `position=0` ; to insert the items in the third position: `position=2`. If omitted, the items will be appended to the playlist. Items are added in the order they appear in the uris array. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M"], "position": 3}`
                     *      */
                    position?: number;
                } & {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            201: components["responses"]["PlaylistSnapshotId"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "remove-tracks-playlist": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                playlist_id: components["parameters"]["PathPlaylistId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description An array of objects containing [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) of the tracks or episodes to remove.
                     *     For example: `{ "tracks": [{ "uri": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" },{ "uri": "spotify:track:1301WleyT98MSxVHPZCA6M" }] }`. A maximum of 100 objects can be sent at once.
                     *      */
                    tracks: {
                        /** @description Spotify URI */
                        uri?: string;
                    }[];
                    /** @description The playlist's snapshot ID against which you want to make the changes.
                     *     The API will validate that the specified items exist and in the specified positions and make the changes,
                     *     even if more recent changes have been made to the playlist.
                     *      */
                    snapshot_id?: string;
                };
            };
        };
        responses: {
            200: components["responses"]["PlaylistSnapshotId"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-a-list-of-current-users-playlists": {
        parameters: {
            query?: {
                limit?: components["parameters"]["QueryLimit"];
                offset?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["PagedPlaylists"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-users-saved-albums": {
        parameters: {
            query?: {
                limit?: components["parameters"]["QueryLimit"];
                offset?: components["parameters"]["QueryOffset"];
                market?: components["parameters"]["QueryMarket"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["PagingSavedAlbumObject"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "save-albums-user": {
        parameters: {
            query: {
                ids: components["parameters"]["QueryAlbumIds"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
                     *      */
                    ids?: string[];
                } & {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description The album is saved */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "remove-albums-user": {
        parameters: {
            query: {
                ids: components["parameters"]["QueryAlbumIds"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
                     *      */
                    ids?: string[];
                } & {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Album(s) have been removed from the library */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "check-users-saved-albums": {
        parameters: {
            query: {
                ids: components["parameters"]["QueryAlbumIds"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["ArrayOfBooleans"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-users-saved-tracks": {
        parameters: {
            query?: {
                market?: components["parameters"]["QueryMarket"];
                limit?: components["parameters"]["QueryLimit"];
                offset?: components["parameters"]["QueryOffset"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["PagingSavedTrackObject"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "save-tracks-user": {
        parameters: {
            query: {
                ids: components["parameters"]["QueryTrackIds"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
                     *      */
                    ids?: string[];
                } & {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Track saved */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "remove-tracks-user": {
        parameters: {
            query: {
                ids: components["parameters"]["QueryTrackIds"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
                     *      */
                    ids?: string[];
                } & {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Track removed */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "check-users-saved-tracks": {
        parameters: {
            query: {
                ids: components["parameters"]["QueryTrackIds"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["ArrayOfBooleans"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-users-saved-episodes": {
        parameters: {
            query?: {
                market?: components["parameters"]["QueryMarket"];
                limit?: components["parameters"]["QueryLimit"];
                offset?: components["parameters"]["QueryOffset"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["PagingSavedEpisodeObject"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "save-episodes-user": {
        parameters: {
            query: {
                ids: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). <br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
                     *      */
                    ids?: string[];
                } & {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Episode saved */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "remove-episodes-user": {
        parameters: {
            query: {
                ids: components["parameters"]["QueryTrackIds"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). <br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
                     *      */
                    ids?: string[];
                } & {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Episode removed */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "check-users-saved-episodes": {
        parameters: {
            query: {
                ids: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["ArrayOfBooleans"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-users-saved-shows": {
        parameters: {
            query?: {
                limit?: components["parameters"]["QueryLimit"];
                offset?: components["parameters"]["QueryOffset"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["PagingSavedShowObject"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "save-shows-user": {
        parameters: {
            query: {
                ids: components["parameters"]["QueryShowIds"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Show saved */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "remove-shows-user": {
        parameters: {
            query: {
                ids: components["parameters"]["QueryShowIds"];
                market?: components["parameters"]["QueryMarket"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Show removed */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "check-users-saved-shows": {
        parameters: {
            query: {
                ids: components["parameters"]["QueryShowIds"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["ArrayOfBooleans"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-users-top-artists-and-tracks": {
        parameters: {
            query?: {
                time_range?: string;
                limit?: components["parameters"]["QueryLimit"];
                offset?: components["parameters"]["QueryOffset"];
            };
            header?: never;
            path: {
                type: "artists" | "tracks";
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["PagingArtistOrTrackObject"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-users-profile": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user_id: components["parameters"]["PathUserId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["OnePublicUser"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-list-users-playlists": {
        parameters: {
            query?: {
                limit?: components["parameters"]["QueryLimit"];
                offset?: number;
            };
            header?: never;
            path: {
                user_id: components["parameters"]["PathUserId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["PagedPlaylists"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "create-playlist": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user_id: components["parameters"]["PathUserId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description The name for the new playlist, for example `"Your Coolest Playlist"`. This name does not need to be unique; a user may have several playlists with the same name.
                     *      */
                    name: string;
                    /** @description Defaults to `true`. The playlist's public/private status (if it should be added to the user's profile or not): `true` the playlist will be public, `false` the playlist will be private. To be able to create private playlists, the user must have granted the `playlist-modify-private` [scope](/documentation/web-api/concepts/scopes/#list-of-scopes). For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)
                     *      */
                    public?: boolean;
                    /** @description Defaults to `false`. If `true` the playlist will be collaborative. _**Note**: to create a collaborative playlist you must also set `public` to `false`. To create collaborative playlists you must have granted `playlist-modify-private` and `playlist-modify-public` [scopes](/documentation/web-api/concepts/scopes/#list-of-scopes)._
                     *      */
                    collaborative?: boolean;
                    /** @description value for playlist description as displayed in Spotify Clients and in the Web API.
                     *      */
                    description?: string;
                } & {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            201: components["responses"]["OnePlaylist"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "follow-playlist": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                playlist_id: components["parameters"]["PathPlaylistId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Defaults to `true`. If `true` the playlist will be included in user's public playlists (added to profile), if `false` it will remain private. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)
                     *      */
                    public?: boolean;
                } & {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Playlist followed */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "unfollow-playlist": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                playlist_id: components["parameters"]["PathPlaylistId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Playlist unfollowed */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-featured-playlists": {
        parameters: {
            query?: {
                locale?: string;
                limit?: components["parameters"]["QueryLimit"];
                offset?: components["parameters"]["QueryOffset"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["PagedFeaturedPlaylists"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-categories": {
        parameters: {
            query?: {
                locale?: string;
                limit?: components["parameters"]["QueryLimit"];
                offset?: components["parameters"]["QueryOffset"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["PagedCategories"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-a-category": {
        parameters: {
            query?: {
                locale?: string;
            };
            header?: never;
            path: {
                category_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["OneCategory"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-a-categories-playlists": {
        parameters: {
            query?: {
                limit?: components["parameters"]["QueryLimit"];
                offset?: components["parameters"]["QueryOffset"];
            };
            header?: never;
            path: {
                category_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["PagedFeaturedPlaylists"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-playlist-cover": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                playlist_id: components["parameters"]["PathPlaylistId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["ArrayOfImages"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "upload-custom-playlist-cover": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                playlist_id: components["parameters"]["PathPlaylistId"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "image/jpeg": string;
            };
        };
        responses: {
            /** @description Image uploaded */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-new-releases": {
        parameters: {
            query?: {
                limit?: components["parameters"]["QueryLimit"];
                offset?: components["parameters"]["QueryOffset"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["PagedAlbums"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-followed": {
        parameters: {
            query: {
                type: "artist";
                after?: string;
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["CursorPagedArtists"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "follow-artists-users": {
        parameters: {
            query: {
                type: "artist" | "user";
                ids: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description A JSON array of the artist or user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids).
                     *     For example: `{ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}`. A maximum of 50 IDs can be sent in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
                     *      */
                    ids: string[];
                } & {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Artist or user followed */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "unfollow-artists-users": {
        parameters: {
            query: {
                type: "artist" | "user";
                ids: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description A JSON array of the artist or user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `{ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}`. A maximum of 50 IDs can be sent in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
                     *      */
                    ids?: string[];
                } & {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Artist or user unfollowed */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "check-current-user-follows": {
        parameters: {
            query: {
                type: "artist" | "user";
                ids: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["ArrayOfBooleans"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "check-if-user-follows-playlist": {
        parameters: {
            query?: {
                ids?: string;
            };
            header?: never;
            path: {
                playlist_id: components["parameters"]["PathPlaylistId"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["SingletonArrayOfBoolean"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-several-audio-features": {
        parameters: {
            query: {
                ids: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["ManyAudioFeatures"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-audio-features": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["OneAudioFeatures"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-audio-analysis": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["OneAudioAnalysis"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-recommendations": {
        parameters: {
            query: {
                limit?: number;
                market?: components["parameters"]["QueryMarket"];
                seed_artists: string;
                seed_genres: string;
                seed_tracks: string;
                min_acousticness?: number;
                max_acousticness?: number;
                target_acousticness?: number;
                min_danceability?: number;
                max_danceability?: number;
                target_danceability?: number;
                min_duration_ms?: number;
                max_duration_ms?: number;
                target_duration_ms?: number;
                min_energy?: number;
                max_energy?: number;
                target_energy?: number;
                min_instrumentalness?: number;
                max_instrumentalness?: number;
                target_instrumentalness?: number;
                min_key?: number;
                max_key?: number;
                target_key?: number;
                min_liveness?: number;
                max_liveness?: number;
                target_liveness?: number;
                min_loudness?: number;
                max_loudness?: number;
                target_loudness?: number;
                min_mode?: number;
                max_mode?: number;
                target_mode?: number;
                min_popularity?: number;
                max_popularity?: number;
                target_popularity?: number;
                min_speechiness?: number;
                max_speechiness?: number;
                target_speechiness?: number;
                min_tempo?: number;
                max_tempo?: number;
                target_tempo?: number;
                min_time_signature?: number;
                max_time_signature?: number;
                target_time_signature?: number;
                min_valence?: number;
                max_valence?: number;
                target_valence?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["OneRecommendations"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-recommendation-genres": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["ManyGenres"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-information-about-the-users-current-playback": {
        parameters: {
            query?: {
                market?: components["parameters"]["QueryMarket"];
                additional_types?: components["parameters"]["QueryAdditionalTypes"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["OneCurrentlyPlaying"];
            /** @description Playback not available or active */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "transfer-a-users-playback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description A JSON array containing the ID of the device on which playback should be started/transferred.<br/>For example:`{device_ids:["74ASZWbe4lXaubB36ztrGX"]}`<br/>_**Note**: Although an array is accepted, only a single device_id is currently supported. Supplying more than one will return `400 Bad Request`_
                     *      */
                    device_ids: string[];
                    /** @description **true**: ensure playback happens on new device.<br/>**false** or not provided: keep the current playback state.
                     *      */
                    play?: boolean;
                } & {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Playback transferred */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-a-users-available-devices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["ManyDevices"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-the-users-currently-playing-track": {
        parameters: {
            query?: {
                market?: components["parameters"]["QueryMarket"];
                additional_types?: components["parameters"]["QueryAdditionalTypes"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["OneCurrentlyPlayingTrack"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "start-a-users-playback": {
        parameters: {
            query?: {
                device_id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Optional. Spotify URI of the context to play.
                     *     Valid contexts are albums, artists & playlists.
                     *     `{context_uri:"spotify:album:1Je1IMUlBXcx1Fz0WE7oPT"}`
                     *      */
                    context_uri?: string;
                    /** @description Optional. A JSON array of the Spotify track URIs to play.
                     *     For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"]}`
                     *      */
                    uris?: string[];
                    /** @description Optional. Indicates from where in the context playback should start. Only available when context_uri corresponds to an album or playlist object
                     *     "position" is zero based and can’t be negative. Example: `"offset": {"position": 5}`
                     *     "uri" is a string representing the uri of the item to start at. Example: `"offset": {"uri": "spotify:track:1301WleyT98MSxVHPZCA6M"}`
                     *      */
                    offset?: {
                        [key: string]: unknown;
                    };
                    /** @description integer */
                    position_ms?: number;
                } & {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Playback started */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "pause-a-users-playback": {
        parameters: {
            query?: {
                device_id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Playback paused */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "skip-users-playback-to-next-track": {
        parameters: {
            query?: {
                device_id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Command sent */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "skip-users-playback-to-previous-track": {
        parameters: {
            query?: {
                device_id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Command sent */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "seek-to-position-in-currently-playing-track": {
        parameters: {
            query: {
                position_ms: number;
                device_id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Command sent */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "set-repeat-mode-on-users-playback": {
        parameters: {
            query: {
                state: string;
                device_id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Command sent */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "set-volume-for-users-playback": {
        parameters: {
            query: {
                volume_percent: number;
                device_id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Command sent */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "toggle-shuffle-for-users-playback": {
        parameters: {
            query: {
                state: boolean;
                device_id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Command sent */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-recently-played": {
        parameters: {
            query?: {
                limit?: number;
                after?: number;
                before?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["CursorPagedPlayHistory"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-queue": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: components["responses"]["Queue"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "add-to-queue": {
        parameters: {
            query: {
                uri: string;
                device_id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Command received */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
    "get-available-markets": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description A markets object with an array of country codes */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example [
                         *       "CA",
                         *       "BR",
                         *       "IT"
                         *     ] */
                        markets?: string[];
                    };
                };
            };
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            429: components["responses"]["TooManyRequests"];
        };
    };
}
