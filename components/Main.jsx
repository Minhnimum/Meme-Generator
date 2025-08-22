import { useState, useEffect } from "react"

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })
    const [textStyles, setTextStyles] = useState({
        topTextSize: 32,
        bottomTextSize: 32,
        topTextColor: "#ffffff",
        bottomTextColor: "#ffffff",
        topBorderColor: "#000000",
        bottomBorderColor: "#000000"
    })
    const [allMemes, setAllMemes] = useState([])
    
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const newMemeUrl = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: newMemeUrl
        }))
    }
    
    function handleChange(event) {
        const {value, name} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function handleStyleChange(event) {
        const {value, name} = event.currentTarget
        setTextStyles(prevStyles => ({
            ...prevStyles,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                
                <div className="text-controls">
                    <h3>Top Text Styling</h3>
                    <label>Font Size
                        <div className="size-control">
                            <input
                                type="range"
                                min="16"
                                max="64"
                                name="topTextSize"
                                onChange={handleStyleChange}
                                value={textStyles.topTextSize}
                            />
                            <input
                                type="number"
                                min="16"
                                max="64"
                                name="topTextSize"
                                onChange={handleStyleChange}
                                value={textStyles.topTextSize}
                                className="size-input"
                            />
                        </div>
                    </label>
                    <div className="color-controls">
                        <label>Text Color
                            <input
                                type="color"
                                name="topTextColor"
                                onChange={handleStyleChange}
                                value={textStyles.topTextColor}
                            />
                        </label>
                        <label>Border Color
                            <input
                                type="color"
                                name="topBorderColor"
                                onChange={handleStyleChange}
                                value={textStyles.topBorderColor}
                            />
                        </label>
                    </div>
                </div>
                
                <div className="text-controls">
                    <h3>Bottom Text Styling</h3>
                    <label>Font Size
                        <div className="size-control">
                            <input
                                type="range"
                                min="16"
                                max="64"
                                name="bottomTextSize"
                                onChange={handleStyleChange}
                                value={textStyles.bottomTextSize}
                            />
                            <input
                                type="number"
                                min="16"
                                max="64"
                                name="bottomTextSize"
                                onChange={handleStyleChange}
                                value={textStyles.bottomTextSize}
                                className="size-input"
                            />
                        </div>
                    </label>
                    <div className="color-controls">
                        <label>Text Color
                            <input
                                type="color"
                                name="bottomTextColor"
                                onChange={handleStyleChange}
                                value={textStyles.bottomTextColor}
                            />
                        </label>
                        <label>Border Color
                            <input
                                type="color"
                                name="bottomBorderColor"
                                onChange={handleStyleChange}
                                value={textStyles.bottomBorderColor}
                            />
                        </label>
                    </div>
                </div>
                
                <button onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span 
                    className="top"
                    style={{
                        fontSize: `${textStyles.topTextSize}px`,
                        color: textStyles.topTextColor,
                        textShadow: `
                            2px 2px 0 ${textStyles.topBorderColor},
                            -2px -2px 0 ${textStyles.topBorderColor},
                            2px -2px 0 ${textStyles.topBorderColor},
                            -2px 2px 0 ${textStyles.topBorderColor},
                            0 2px 0 ${textStyles.topBorderColor},
                            2px 0 0 ${textStyles.topBorderColor},
                            0 -2px 0 ${textStyles.topBorderColor},
                            -2px 0 0 ${textStyles.topBorderColor},
                            2px 2px 5px ${textStyles.topBorderColor}
                        `
                    }}
                >
                    {meme.topText}
                </span>
                <span 
                    className="bottom"
                    style={{
                        fontSize: `${textStyles.bottomTextSize}px`,
                        color: textStyles.bottomTextColor,
                        textShadow: `
                            2px 2px 0 ${textStyles.bottomBorderColor},
                            -2px -2px 0 ${textStyles.bottomBorderColor},
                            2px -2px 0 ${textStyles.bottomBorderColor},
                            -2px 2px 0 ${textStyles.bottomBorderColor},
                            0 2px 0 ${textStyles.bottomBorderColor},
                            2px 0 0 ${textStyles.bottomBorderColor},
                            0 -2px 0 ${textStyles.bottomBorderColor},
                            -2px 0 0 ${textStyles.bottomBorderColor},
                            2px 2px 5px ${textStyles.bottomBorderColor}
                        `
                    }}
                >
                    {meme.bottomText}
                </span>
            </div>
        </main>
    )
}