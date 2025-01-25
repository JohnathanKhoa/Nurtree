interface UserProfile {
    country: string;
    display_name: string;
    email: string;
    explicit_content: {
        filter_enabled: boolean,
        filter_locked: boolean
    },
    external_urls: { spotify: string; };
    followers: { href: string; total: number; };
    href: string;
    id: string;
    images: Image[];
    product: string;
    type: string;
    uri: string;
}

interface Image {
    url: string;
    height: number;
    width: number;
}

interface SpotifyResponse extends React.Component {
    href: string;
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
    items: SpotifyShow[];
  }
  
interface SpotifyShow extends React.Component {
    collaborative: boolean;
    description: string;
    external_urls: ExternalUrl;
    href: string;
    id: string;
    images: SpotifyImage[];
    name: string;
    owner: SpotifyOwner;
    public: boolean;
    snapshot_id: string;
    tracks: Tracks;
    type: string;
    uri: string;
}
  
interface ExternalUrl extends React.Component {
    spotify: string;
}
  
interface SpotifyImage extends React.Component{
    url: string;
    height: number;
    width: number;
}
  
interface SpotifyOwner extends React.Component{
    external_urls: ExternalUrl;
    followers: Followers;
    href: string;
    id: string;
    type: string;
    uri: string;
    display_name: string;
}
  
interface Followers extends React.Component {
    href: string | null;
    total: number;
}
  
interface Tracks extends React.Component {
    href: string;
    total: number;
}
  
interface Album {
    album_type: string;
    total_tracks: number;
    available_markets: string[];
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    images: {
      url: string;
      height: number;
      width: number;
    }[];
    name: string;
    release_date: string;
    release_date_precision: string;
    restrictions: {
      reason: string;
    };
    type: string;
    uri: string;
    artists: Artist[];
}
  
interface Artist {
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}
  
interface ExternalIds {
    isrc: string;
    ean: string;
    upc: string;
}
  
interface Track {
    album: Album;
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalIds;
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    is_playable: boolean;
    linked_from: object;
    restrictions: {
      reason: string;
    };
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
    is_local: boolean;
}

interface PropsType<T> {
  items: T[];
  renderer: (item: T) => React.ReactNode;
}