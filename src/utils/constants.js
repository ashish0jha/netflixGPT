export const logo="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const Profile="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const API_options={
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
  }
};

export const MoviePoster="https://image.tmdb.org/t/p/original";

export const BG_Page="https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg";

export const supported_lang=[
  {identifier:"en", name:"English"},
  {identifier:"hindi", name:"Hindi"}
]

export const GEMINI_KEY=process.env.REACT_APP_GEMINI_KEY