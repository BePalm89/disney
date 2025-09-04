import './CharacterList.css';
import {useEffect, useState} from "react";
import {makeRequest} from "../../utils/api/makeRequest.js";
import {API_ENDPOINT} from "../../utils/api/url.enum.js";

const CharacterList = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await makeRequest({ endpoint: API_ENDPOINT.GET_ALL_CHARACTERS });
                setCharacters(response.data);
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);

    return (
        <p>Character List works</p>
    );
};

export default CharacterList;
