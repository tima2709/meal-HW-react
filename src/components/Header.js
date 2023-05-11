import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    const [value, setValue] = useState('')
    return (
        <div className={'container'}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px'

            }}>
                <div style={{
                    fontWeight: 'bold'
                }}>
                    <Link to={'/'}>Logo</Link>
                </div>
                <div>
                    <input style={{
                    marginRight: '0px'
                    }}
                        id={'search'} type="text" onChange={(e) => {
                        setValue(e.target.value)}
                    }/>
                    <button style={{
                        padding: '2px 20px',
                        borderRadius: '0',

                    }}
                        className={'search'}>
                        <Link to={`search/${value}`}>search</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;