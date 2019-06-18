import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';

import MainPage from '../pages/MainPage';
import Statistic from '../pages/Statistic';

export default class Layout extends React.Component {
    render () {

        console.log('PROPSES')
        console.log(this.state)

        return (
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/statistic">Статистика</Link></li>
                    </ul>
                </nav>
                <div>
                    <Switch>
                        <Route exact path="/" component={MainPage}/>
                        <Route path="/statistic" component={Statistic}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        stateAll: state
    }
}

export default connect(mapStateToProps)(Layout)