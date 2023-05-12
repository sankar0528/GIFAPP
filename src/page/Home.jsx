import React from 'react';
import {  signOut } from "firebase/auth";
import {auth} from '../firebase';
import { useNavigate } from 'react-router-dom';
import './Home.css' 

const Home = () => {
    let [search,setSearch]=React.useState('');
    let [gifs,setGifs]=React.useState([]);
    let [loading,setLoading]=React.useState(false);
    const navigate = useNavigate();
    const GIPHY_API="https://api.giphy.com/v1/gifs/search?api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65&limit=20&offset=0&q=";
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }
    let searchGif=()=>{
        if(search.length>0)
        {
            setLoading(true);
            fetch(GIPHY_API+search)
            .then((res)=>{
                setLoading(false);
                return res.json();
            })
            .then((result)=>{
                setGifs(result.data.map((gif)=>{
                    return gif.images.fixed_height.url;
                }))
            })
            .catch(()=>{
                setLoading(false);
                alert("something went wrong")
            })
        }
    }
   let favourite=()=>[
    
   ]
    return(

        <>
                <h1 className='hometext'>
                    Welcome Home
                </h1>
                <nav>
 
                <div>
        			<button onClick={handleLogout} className='logout'>
                        Logout
                    </button>
                    <button onClick={favourite}>Favourites</button>
        		</div>

            </nav>
            <div className='header'>
                <div>
                <input
                type="text"
                placeholder='search gifs'
                value={search}
                onChange={(e)=>setSearch(e.target.value)}/>
                <button onClick={searchGif}>Search</button>
                </div>
            </div>
            <div className='result'>
                {
                    (loading)?(
                            <div className='loading'>
                                <div className='loader'>

                                </div>
                            </div>
                    ):(
                    <div className='list'>
                        {
                            gifs.map((gif)=>{
                                return(
                                    <div className='item'>
                                        <img src={gif} alt="Hello"/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    )
                }
            </div>
            
        </>
    )
}
 
export default Home;