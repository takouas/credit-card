
import React from 'react';
import Affichage from './affichage'
class Credit extends React.Component {
    state = {
        number: '****************', nom: '', date: ''
    }

    changeNumber = (e) => {
        let regex = RegExp(/^[0-9]{0,16}$/);
        if (regex.test(e.target.value)) {
            this.setState({ number: e.target.value.padEnd(16, '*') })
        }
        console.log(this.state.number)
    }



    changeNom = (e) => {
        let regex = RegExp(/^[a-zA-Z ]{0,20}$/);
        if (regex.test(e.target.value)) {
            this.setState({ nom: e.target.value })
        }
    }
    changeDate = (e) => {

        let regex1 = /^(0[1-9]|1[0-2])+(2[0-5])$/
        if (regex1.test(e.target.value)) {

            this.setState({ date: e.target.value })


        }


    }

    render() {
        return (

            <div className='container'>

                <div className='card'> < Affichage number={this.state.number} nom={this.state.nom} date={this.state.date} years={this.state.years} /></div>
                <div className='container-input'>
                    <center>
                        <div>
                            <h5> Number   </h5>    <input type="text" className='input ' pattern="^[0-9]$" onChange={this.changeNumber} maxLength='16' />
                            <br />

                            <h5>Name</h5> <input type="text" className='input' value={this.state.nom}
                                onChange={this.changeNom} /><br />

                            <h5 >Date </h5><span className='container-date' ><input className='inputDate input' maxLength='4' onChange={this.changeDate} />
                            </span>
                        </div>
                    </center>
                </div>

            </div>

        );
    }
}


export default Credit







