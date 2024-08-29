export interface paths {
    "/album.tracks.get": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query: {
                    /** @description output format: json, jsonp, xml. */
                    format?: string;
                    /** @description jsonp callback */
                    callback?: string;
                    /** @description The musiXmatch album id */
                    album_id: string;
                    /** @description When set, filter only contents with lyrics */
                    f_has_lyrics?: string;
                    /** @description Define the page number for paginated results */
                    page?: number;
                    /** @description Define the page size for paginated results.Range is 1 to 100. */
                    page_size?: number;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description The request was successful. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message?: {
                                header?: {
                                    status_code?: number;
                                    available?: number;
                                    execute_time?: number;
                                };
                                body?: {
                                    /** @description A list of tracks */
                                    track_list?: components["schemas"]["Track"][];
                                };
                            };
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/album.get": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query: {
                    /** @description output format: json, jsonp, xml. */
                    format?: string;
                    /** @description jsonp callback */
                    callback?: string;
                    /** @description The musiXmatch album id */
                    album_id: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description The request was successful. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message?: {
                                header?: {
                                    status_code?: number;
                                    execute_time?: number;
                                };
                                body?: {
                                    album?: components["schemas"]["Album"];
                                };
                            };
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/artist.related.get": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query: {
                    /** @description output format: json, jsonp, xml. */
                    format?: string;
                    /** @description jsonp callback */
                    callback?: string;
                    /** @description The musiXmatch artist id */
                    artist_id: string;
                    /** @description Define the page size for paginated results.Range is 1 to 100. */
                    page_size?: number;
                    /** @description Define the page number for paginated results */
                    page?: number;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description The request was successful. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message?: {
                                header?: {
                                    available?: number;
                                    status_code?: number;
                                    execute_time?: number;
                                };
                                body?: {
                                    /** @description A list of artists */
                                    artist_list?: {
                                        artist?: components["schemas"]["Artist"];
                                    }[];
                                };
                            };
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/artist.albums.get": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query: {
                    /** @description output format: json, jsonp, xml. */
                    format?: string;
                    /** @description jsonp callback */
                    callback?: string;
                    /** @description The musiXmatch artist id */
                    artist_id: string;
                    /** @description Sort by release date (asc|desc) */
                    s_release_date?: string;
                    /** @description Group by Album Name */
                    g_album_name?: string;
                    /** @description Define the page size for paginated results.Range is 1 to 100. */
                    page_size?: number;
                    /** @description Define the page number for paginated results */
                    page?: number;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description The request was successful. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message?: {
                                header?: {
                                    available?: number;
                                    status_code?: number;
                                    execute_time?: number;
                                };
                                body?: {
                                    /** @description A list of albums */
                                    album_list?: {
                                        album?: components["schemas"]["Album"];
                                    }[];
                                };
                            };
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/artist.search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    /** @description output format: json, jsonp, xml. */
                    format?: string;
                    /** @description jsonp callback */
                    callback?: string;
                    /** @description The song artist */
                    q_artist?: string;
                    /** @description When set, filter by this artist id */
                    f_artist_id?: number;
                    /** @description Define the page number for paginated results */
                    page?: number;
                    /** @description Define the page size for paginated results.Range is 1 to 100. */
                    page_size?: number;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description The request was successful. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message?: {
                                header?: {
                                    available?: number;
                                    status_code?: number;
                                    execute_time?: number;
                                };
                                body?: {
                                    /** @description A list of artists */
                                    artist_list?: {
                                        artist?: components["schemas"]["Artist"];
                                    }[];
                                };
                            };
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/artist.get": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query: {
                    /** @description output format: json, jsonp, xml. */
                    format?: string;
                    /** @description jsonp callback */
                    callback?: string;
                    /** @description 	The musiXmatch artist id */
                    artist_id: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description The request was successful. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message?: {
                                header?: {
                                    status_code?: number;
                                    execute_time?: number;
                                };
                                body?: {
                                    artist?: components["schemas"]["Artist"];
                                };
                            };
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/matcher.subtitle.get": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    /** @description output format: json, jsonp, xml. */
                    format?: string;
                    /** @description jsonp callback */
                    callback?: string;
                    /** @description The song title */
                    q_track?: string;
                    /** @description 	The song artist */
                    q_artist?: string;
                    /** @description Filter by subtitle length in seconds */
                    f_subtitle_length?: number;
                    /** @description Max deviation for a subtitle length in seconds */
                    f_subtitle_length_max_deviation?: number;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description The request was successful. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message?: {
                                header?: {
                                    status_code?: number;
                                    execute_time?: number;
                                };
                                body?: {
                                    subtitle?: components["schemas"]["Subtitle"];
                                };
                            };
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/matcher.track.get": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    /** @description output format: json, jsonp, xml. */
                    format?: string;
                    /** @description jsonp callback */
                    callback?: string;
                    /** @description The song artist */
                    q_artist?: string;
                    /** @description The song title */
                    q_track?: string;
                    /** @description When set, filter only contents with lyrics */
                    f_has_lyrics?: number;
                    /** @description When set, filter only contents with subtitles */
                    f_has_subtitle?: number;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description The request was successful. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message?: {
                                header?: {
                                    status_code?: number;
                                    execute_time?: number;
                                };
                                body?: {
                                    track?: components["schemas"]["Track"];
                                };
                            };
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/matcher.lyrics.get": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    /** @description output format: json, jsonp, xml. */
                    format?: string;
                    /** @description jsonp callback */
                    callback?: string;
                    /** @description The song title */
                    q_track?: string;
                    /** @description The song artist */
                    q_artist?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description The request was successful. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message?: {
                                header?: {
                                    status_code?: number;
                                    execute_time?: number;
                                };
                                body?: {
                                    lyrics?: components["schemas"]["Lyrics"];
                                };
                            };
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/track.snippet.get": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query: {
                    /** @description output format: json, jsonp, xml. */
                    format?: string;
                    /** @description jsonp callback */
                    callback?: string;
                    /** @description The musiXmatch track id */
                    track_id: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description The request was successful. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message?: {
                                header?: {
                                    status_code?: number;
                                    execute_time?: number;
                                };
                                body?: {
                                    snippet?: components["schemas"]["Snippet"];
                                };
                            };
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/track.lyrics.get": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query: {
                    /** @description output format: json, jsonp, xml. */
                    format?: string;
                    /** @description jsonp callback */
                    callback?: string;
                    /** @description The musiXmatch track id */
                    track_id: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description The request was successful. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message?: {
                                header?: {
                                    status_code?: number;
                                    execute_time?: number;
                                };
                                body?: {
                                    lyrics?: components["schemas"]["Lyrics"];
                                };
                            };
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/track.subtitle.get": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query: {
                    /** @description output format: json, jsonp, xml. */
                    format?: string;
                    /** @description jsonp callback */
                    callback?: string;
                    /** @description The musiXmatch track id */
                    track_id: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description The request was successful. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message?: {
                                header?: {
                                    status_code?: number;
                                    execute_time?: number;
                                };
                                body?: {
                                    subtitle?: components["schemas"]["Subtitle"];
                                };
                            };
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/track.get": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query: {
                    /** @description output format: json, jsonp, xml. */
                    format?: string;
                    /** @description jsonp callback */
                    callback?: string;
                    /** @description The musiXmatch track id */
                    track_id: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description The request was successful. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message?: {
                                header?: {
                                    status_code?: number;
                                    execute_time?: number;
                                };
                                body?: {
                                    track?: components["schemas"]["Track"];
                                };
                            };
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/track.search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    /** @description output format: json, jsonp, xml. */
                    format?: string;
                    /** @description jsonp callback */
                    callback?: string;
                    /** @description The song title */
                    q_track?: string;
                    /** @description The song artist */
                    q_artist?: string;
                    /** @description Any word in the lyrics */
                    q_lyrics?: string;
                    /** @description When set, filter by this artist id */
                    f_artist_id?: number;
                    /** @description When set, filter by this music category id */
                    f_music_genre_id?: number;
                    /** @description Filter by the lyrics language (en,it,..) */
                    f_lyrics_language?: number;
                    /** @description When set, filter only contents with lyrics */
                    f_has_lyrics?: number;
                    /** @description Sort by our popularity index for artists (asc|desc) */
                    s_artist_rating?: string;
                    /** @description Sort by our popularity index for tracks (asc|desc) */
                    s_track_rating?: string;
                    /** @description Search only a part of the given query string.Allowed range is (0.1 – 0.9) */
                    quorum_factor?: number;
                    /** @description Define the page size for paginated results.Range is 1 to 100. */
                    page_size?: number;
                    /** @description Define the page number for paginated results */
                    page?: number;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description The request was successful. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message?: {
                                header?: {
                                    available?: number;
                                    status_code?: number;
                                    execute_time?: number;
                                };
                                body?: {
                                    /** @description A list of tracks */
                                    track_list?: {
                                        track?: components["schemas"]["Track"];
                                    }[];
                                };
                            };
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chart.tracks.get": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    /** @description output format: json, jsonp, xml. */
                    format?: string;
                    /** @description jsonp callback */
                    callback?: string;
                    /** @description Define the page number for paginated results */
                    page?: number;
                    /** @description Define the page size for paginated results.Range is 1 to 100. */
                    page_size?: number;
                    /** @description A valid ISO 3166 country code */
                    country?: string;
                    /** @description When set, filter only contents with lyrics */
                    f_has_lyrics?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description The request was successful. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message?: {
                                header?: {
                                    available?: number;
                                    status_code?: number;
                                    execute_time?: number;
                                };
                                body?: {
                                    /** @description A list of tracks */
                                    track_list?: {
                                        track?: components["schemas"]["Track"];
                                    }[];
                                };
                            };
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chart.artists.get": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    /** @description output format: json, jsonp, xml. */
                    format?: string;
                    /** @description jsonp callback */
                    callback?: string;
                    /** @description Define the page number for paginated results */
                    page?: number;
                    /** @description Define the page size for paginated results.Range is 1 to 100. */
                    page_size?: number;
                    /** @description A valid ISO 3166 country code */
                    country?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description The request was successful. */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message?: {
                                header?: {
                                    available?: number;
                                    status_code?: number;
                                    execute_time?: number;
                                };
                                body?: {
                                    /** @description A list of artists */
                                    artist_list?: {
                                        artist?: components["schemas"]["Artist"];
                                    }[];
                                };
                            };
                        };
                    };
                };
            };
        };
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
        /**
         * a Artist object
         * @description a artist in the Musixmatch database.
         */
        Artist: {
            artist_credits?: {
                artist_list?: string[];
            };
            artist_mbid?: string;
            artist_name?: string;
            secondary_genres?: {
                music_genre_list?: string[];
            };
            artist_alias_list?: {
                artist_alias?: string;
            }[];
            artist_vanity_id?: string;
            restricted?: number;
            artist_country?: string;
            artist_comment?: string;
            artist_name_translation_list?: {
                artist_name_translation?: {
                    language?: string;
                    translation?: string;
                };
            }[];
            artist_edit_url?: string;
            artist_share_url?: string;
            artist_id?: number;
            updated_time?: string;
            managed?: number;
            primary_genres?: {
                music_genre_list?: {
                    music_genre?: {
                        music_genre_parent_id?: number;
                        music_genre_name?: string;
                        music_genre_vanity?: string;
                        music_genre_id?: number;
                        music_genre_name_extended?: string;
                    };
                }[];
            };
            artist_twitter_url?: string;
            artist_rating?: number;
        };
        /**
         * a Subtitle object
         * @description a synchronized lyrics subtitle in the Musixmatch database.
         */
        Subtitle: {
            subtitle_body?: string;
            publisher_list?: string[];
            subtitle_language?: string;
            subtitle_language_description?: string;
            subtitle_id?: number;
            pixel_tracking_url?: string;
            html_tracking_url?: string;
            restricted?: number;
            lyrics_copyright?: string;
            script_tracking_url?: string;
            subtitle_length?: number;
            updated_time?: string;
            writer_list?: string[];
        };
        /**
         * a Album object
         * @description a album of songs in the Musixmatch database.
         */
        Album: {
            album_coverart_500x500?: string;
            restricted?: number;
            artist_id?: number;
            album_name?: string;
            album_coverart_800x800?: string;
            album_copyright?: string;
            album_coverart_350x350?: string;
            artist_name?: string;
            primary_genres?: {
                music_genre_list?: {
                    music_genre?: {
                        music_genre_name_extended?: string;
                        music_genre_vanity?: string;
                        music_genre_parent_id?: number;
                        music_genre_id?: number;
                        music_genre_name?: string;
                    };
                }[];
            };
            album_id?: number;
            album_rating?: number;
            album_pline?: string;
            album_track_count?: number;
            album_release_type?: string;
            album_release_date?: string;
            album_edit_url?: string;
            updated_time?: string;
            secondary_genres?: {
                music_genre_list?: string[];
            };
            album_mbid?: string;
            album_vanity_id?: string;
            album_coverart_100x100?: string;
            album_label?: string;
        };
        /**
         * a Track object
         * @description a song in the Musixmatch database
         */
        Track: {
            instrumental?: number;
            album_coverart_350x350?: string;
            first_release_date?: string;
            track_isrc?: string;
            explicit?: number;
            track_edit_url?: string;
            num_favourite?: number;
            album_coverart_500x500?: string;
            album_name?: string;
            track_rating?: number;
            track_share_url?: string;
            track_soundcloud_id?: number;
            artist_name?: string;
            album_coverart_800x800?: string;
            album_coverart_100x100?: string;
            track_name_translation_list?: string[];
            track_name?: string;
            restricted?: number;
            has_subtitles?: number;
            updated_time?: string;
            subtitle_id?: number;
            lyrics_id?: number;
            track_spotify_id?: string;
            has_lyrics?: number;
            artist_id?: number;
            album_id?: number;
            artist_mbid?: string;
            secondary_genres?: {
                music_genre_list?: {
                    music_genre?: {
                        music_genre_vanity?: string;
                        music_genre_name_extended?: string;
                        music_genre_parent_id?: number;
                        music_genre_name?: string;
                        music_genre_id?: number;
                    };
                }[];
            };
            commontrack_vanity_id?: string;
            track_id?: number;
            track_xboxmusic_id?: string;
            primary_genres?: {
                music_genre_list?: {
                    music_genre?: {
                        music_genre_vanity?: string;
                        music_genre_name_extended?: string;
                        music_genre_name?: string;
                        music_genre_parent_id?: number;
                        music_genre_id?: number;
                    };
                }[];
            };
            track_length?: number;
            track_mbid?: string;
            commontrack_id?: number;
        };
        /**
         * a Lyrics object
         * @description a Lyrics in the Musixmatch database.
         */
        Lyrics: {
            instrumental?: number;
            pixel_tracking_url?: string;
            publisher_list?: string[];
            lyrics_language_description?: string;
            restricted?: number;
            updated_time?: string;
            explicit?: number;
            lyrics_copyright?: string;
            html_tracking_url?: string;
            lyrics_language?: string;
            script_tracking_url?: string;
            verified?: number;
            lyrics_body?: string;
            lyrics_id?: number;
            writer_list?: string[];
            can_edit?: number;
            action_requested?: string;
            locked?: number;
        };
        /**
         * a Snippet object
         * @description Snippet of lyrics text in the Musixmatch database.
         */
        Snippet: {
            html_tracking_url?: string;
            instrumental?: number;
            restricted?: number;
            updated_time?: string;
            snippet_body?: string;
            pixel_tracking_url?: string;
            snippet_id?: number;
            script_tracking_url?: string;
            snippet_language?: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
