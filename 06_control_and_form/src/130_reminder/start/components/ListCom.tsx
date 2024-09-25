type propsTyps = {
		todos: {
			id: number,
			content: string
		}[]
		deleteTodo: Function
}

const ListCom = ({ todos,  deleteTodo}: propsTyps) => {
	const complete = (id: number) => {
		deleteTodo(id)
	}
	
	return (
		<>
			<div>
				{
					todos.map((val) => {
						return(
								<div key={val.id}>
									<button onClick={() => complete(val.id)} >完了</button>
									<span>{val.content}</span>
								</div>
						)
					})
				}
			</div>
		</>
	)

}

export default ListCom;