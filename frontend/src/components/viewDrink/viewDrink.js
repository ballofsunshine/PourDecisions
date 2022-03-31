import React, { useEffect, useState } from 'react'
import './viewDrink.css'
import AXIOS from '../../axios.config'
import { Link, useParams } from 'react-router-dom'
import { set } from 'mongoose'

export default function ViewDrink() {
    let { drinkId } = useParams()

    const [drink, setDrink] = useState({})
    const [userType, setUserType] = useState("")
    const [load, setLoad] = useState(false)
    const [favourites, setFavourites] = useState([])
    const [alreadyFavourited, setAlreadyFavourited] = useState(false)
    const [editing, setEditing] = useState(false)
    
    useEffect( () => {
        const timer = setTimeout(() => {
            setLoad(true)
        }, 150)
        return () => clearTimeout(timer)
    }, [])

    const loadStates = () => {
        const user = localStorage.getItem('loggedUsername')
        AXIOS.get("/drinks/id/" + drinkId)
        .then(res => {
            if (userType !== "guest"){
                setDrink(res.data)
                if (user == res.data.author) {
                    setUserType("author")
                }
                AXIOS.get("/users/" + user)
                .then(res => 
                    setFavourites(res.data.favourites)
                )
            } else {
                setDrink(res.data)
            }
        })
    } 
    useEffect( () => {
        if (localStorage.getItem('loggedIn') === null){
            setUserType("guest")
        }
        else if (localStorage.getItem('loggedUsername') == 'admin') {
            setUserType("admin") 
        }
        else{
            setUserType("user")
        }
        loadStates()
    }, []) 

    const alreadyInFavourites = () => {

        setAlreadyFavourited(
            favourites.some( e => e.name == drink.name && e.author == drink.author)
        ) 
    }

    useEffect ( () => {
        alreadyInFavourites()
    })

    const capitalizeFirstLetter = (str) => {
        const words = str.split(" ")
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].toLowerCase()[0].toUpperCase() + words[i].substr(1);
        }

        return words.join(" ")
    }

    const handleButtonChange = () => {
        if (alreadyFavourited) {
            AXIOS.put('/users/' + localStorage.getItem('loggedUsername') + '/favourite/remove', {
                drinkId: drinkId
            })
            .then( () => {
                AXIOS.put('/drinks/drink/unlike', {
                    drinkId: drinkId
                })
                .then( () => {
                    setAlreadyFavourited(!alreadyFavourited)
                    window.location.reload(false)
                })
            })
        }
        else {
            AXIOS.put('/users/' + localStorage.getItem('loggedUsername') + '/favourite/add', {
                drinkId: drinkId 
            })
            .then( () => {
                AXIOS.put('/drinks/drink/like', {
                    drinkId: drinkId
                })
                .then( () => {
                    setAlreadyFavourited(!alreadyFavourited)
                    window.location.reload(false)
                })
            })
        }
    }

    const handleEditSubmit = () => {

    }

    const toggleEditing = () => {
        // if currently editing
        if (editing) {
            // set it back to unblur
            document.getElementById("drink-info").style.filter = "blur(0px)"   
            document.getElementById("drink-info").style.pointerEvents = "auto" 
        }
        // if not editing
        else {
            // then set to blur
            document.getElementById("drink-info").style.filter = "blur(8px)"   
            document.getElementById("drink-info").style.pointerEvents = "none" 
        }
        setEditing(!editing)
    }

    const getIngredientsString = (drink) => {
        var ingredients = []
        drink.recipe.ingredients.map( ing => 
            ingredients.push(capitalizeFirstLetter(ing.ingredientName))
        ) 
        return ingredients.join(", ")
    }
    const getGarnishString = (drink) => {
        var ingredients = []
        drink.recipe.garnish.map( ing => 
            ingredients.push(capitalizeFirstLetter(ing))
        ) 
        return ingredients.join(", ")
    }
    const EditPopup = () => {
        return (
            <div id="edit-popup">
            
                <div id="popup-title">
                <span>Edit drink</span> 
                <button id="close-button" onClick={() => toggleEditing()}>X</button>
                </div>

                <div id="popup-edit-entry">
                <label for="drinkName">Drink name</label>
                <input name="drinkName" type="text" placeholder={drink.name}/>

                <label for="ingredients">Ingredients</label>
                <input name="ingredients" type="text" placeholder={getIngredientsString(drink)}/>

                <label for="garnish">Garnish</label>
                <input name="garnish" type="text" placeholder={getGarnishString(drink)}/>

                <label for="instructions">Instructions</label>
                <input name="instructions" type="text" placeholder={drink.recipe.instruction}/>
                </div>

                <button onClick={() => toggleEditing()}> unclick </button>

            </div>
        )
    } 
    
    return load 
        ? (
        <div id="view-drink">
        <div id="drink-info">
        <div id="top-bar">
            <span id="drink-name" className="top-bar-element left">{drink.name}</span>
            <span id="drink-rating" className="top-bar-element left">{drink.rating + " likes"}</span>
            <span id="drink-tag" className="top-bar-element right">{drink.tag}</span>
            <span id="drink-author" className="top-bar-element left">{"made by " + drink.author}</span>
        </div> 
        <div id="body">
            <span className="body-header">Ingredients:</span>
            <ul className="body-text ingredient ingredient-list">
            { drink.recipe.ingredients.map( ing => 
                <li key={ing._id} className='ingredient'>
                    {capitalizeFirstLetter(ing.ingredientName)}
                </li> 
            )} 
            </ul>
            <span className="body-header">Garnish:</span>
            <ul className="body-text ingredient ingredient-list">
            {drink.recipe.garnish.length !== 0
                ? drink.recipe.garnish.map( (garn, i) => 
                <li key={i} className='ingredient'>
                    {capitalizeFirstLetter(garn)}
                </li>
                )
                :
                <small>
                    <i>No garnishes.</i>
                </small>
                
            } 
            </ul>
            <span className="body-header">Instructions:</span>
            {drink.recipe.instructions == undefined
                || drink.recipe.instructions == null
                || drink.recipe.instructions == ""
            ? 
            <p className="body-text">
                <small>
                    <i>No instructions left by author.</i>
                </small>
            </p>
            :
            <p className="body-text">
                <small>
                    {drink.recipe.instructions}
                </small>
            </p>
            }
        </div>
        <div id="buttons">
            {userType == "guest" 
                ? 
                    <></>
                : 
                userType == "admin" || userType == "author"
                ?
                <div id="buttons">
                <ul>
                <li>
                <div id="favourite-button" className="mimick-button">
                    <label>
                    <input type="checkbox" checked={alreadyFavourited} onChange={()=>handleButtonChange()}/>
                    <span>Favourite this drink!</span>
                    </label>
                </div>
                </li>
                <li>
                <div id="edit-button" className="mimick-button">
                    <label>
                    <input type="submit" onClick={() => toggleEditing()}/>
                    <span>Edit this drink!</span>
                    </label>
                </div>
                </li>
                </ul>
                </div>  
                :
                <></>
            }
        </div>      
        </div>
        {editing ? <EditPopup/> : <></>} 
        </div>
    ) 
    : 
        <div>
            {/* add loading screen here */}
        </div>
} 
