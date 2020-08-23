import React from 'react';
import Aux from '../../hoc/Aux';
import Classes from './Layout.css'

const layout = (props) => (
    <Aux>
        <main className={Classes.Content}>
            {props.children}
        </main>
    </Aux>
);


export default layout;