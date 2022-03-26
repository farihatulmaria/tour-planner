import React from 'react';
import imgNatur from '../assets/img/react.png';
import './Questions.css';

const Questions = () => {
    return (
        <section className='pt-5 pb-5'>
        <div className="container-fluid">
           <div className='row'>
            <h2 className='text-center p-5'>Frequently Ask Question</h2>
            <div className='col-md-6'>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        How react works
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            React is a JavaScript library for making user interfaces.React reads objects and uses them to produce HTML elements on the virtual DOM, after which it gets synced with the real DOM. So we'll have trees of objects on the virtual DOM and trees of objects on the real DOM. React automatically updates the associated DOM element when we change data on a React element.In other words react goes through its virtual DOM, creates a list of changes that need to be made to the real DOM and besides does it apiece in one single process.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Props VS States
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Props</th>
                                <th scope="col">States</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Props are immutable.</td>
                                    <td>State is mutable.</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>You can pass properties from parent components.</td>
                                    <td>You can define states in the components themselves.</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Determine the view upon creation and then they remain static.</td>
                                    <td>The state is inset and updated by the object.</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Both are accessible as attributes of components class and compose components with a different representation(view).</td>
                                    <td>Both are accessible as attributes of components class and compose with a different representation(view).</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Determine the view upon creation and then they remain static.</td>
                                    <td>It's passed in from a parent component.</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>It's read-only which means it can't be updated.</td>
                                    <td>Its changes can be asynchronous.</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>It can't be modified.</td>
                                    <td>It can be modified using this.setState</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        How useState work 
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        UseState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.The useState hook allows us declare one or more state variables in function components. Under the hood, React keeps track of these state variables and ensures they stay up-to-date on subsequent re-renders of the component.UseState can be used to toggle between two values, usually true and false , in order to toggle a flag.React useState hook is asynchronous
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-6 text-center">
            <img className='img-fluid' src={imgNatur} alt="" />
        </div>
        </div>
        </div>
        </section>
    );
};

export default Questions;

/* 



*/