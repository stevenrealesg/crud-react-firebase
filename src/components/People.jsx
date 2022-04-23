import Person from "./Person";

function People() {
    return (
        <div className='row'>
            <div className='col-md-4'>
                <Person />
            </div>
            <div className='col-md-4'>
                <Person />
            </div>
            <div className='col-md-4'>
                <Person />
            </div>
            <div className='col-md-4'>
                <Person />
            </div>
            <div className='col-md-4'>
                <Person />
            </div>
        </div>
    );
}

export default People;