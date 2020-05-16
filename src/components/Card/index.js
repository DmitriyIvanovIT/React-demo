import React from 'react';
import s from './Card.module.scss';

class Card extends React.Component {

    state = {
        done: false,
    };

    handleCardClick = () => {
        if (this.state.done === false) {
            this.setState({done: true,})
        } else {
            this.setState({done: false,})
        }

    };

    render() {
        const { eng, rus } = this.props, 
        { done } = this.state,
        cardClass = [s.card];

        if (done) {
            cardClass.push(s.done);
        } else {
            cardClass.slice(s.done);
        }

        return (
            <div 
                className={cardClass.join(' ')}
                onClick={this.handleCardClick}
            >
                    <div className={s.cardInner}>
                        <div className={s.cardFront}>
                            { eng }
                        </div>
                        <div className={s.cardBack}>
                            { rus }
                        </div>
                    </div> 
            </div>
        );
    };

};

export default Card;