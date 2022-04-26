import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeName } from "../../store/modules/user/actions"

const UserCard = () =>{

    const dispatch = useDispatch()
    const [newName, setNewName] = useState('')
    const user = useSelector((state) => state.user)

    const handleClick =  () =>{
        dispatch(changeName(newName))
    }

    return (
        <>
        <div>
            <h2>User name: {user.name}</h2>
            <input type='text' onChange={(event) => setNewName(event.target.value) }/>
            <button onClick={handleClick}>Change</button>
        </div>
        </>
    )
}

export default UserCard