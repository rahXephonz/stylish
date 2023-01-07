import { Extracts } from "extracts";

class CoreAPI extends Extracts {
  constructor() {
    // extends your api URL for your api route url ;)
    super("https://jsonplaceholder.typicode.com");
  }

  // another logic
}

class TodosService extends CoreAPI {
  async getAllTodos() {
    // returning generic types promises
    const res = await this.extracts<DataTodos[]>("/todos", "GET");

    return res;
  }

  // code above will convert into
  // will convert into
  //  async getAllTodos(id:number) {
  //   return await axios.get("/todos")/then(res => res.json())
  //  }

  async deleteTodos(id: number) {
    const res = await this.extracts(`/todos/${id}`, "DELETE");

    return res;
  }

  async updateTodos(id: number, props: Record<string, any>) {
    const res = await this.extracts(`/todos/${id}`, "PATCH", {
      json: {
        ...props,
      },
    });

    return res;
  }
}

const todosService = new TodosService();

export default todosService;
