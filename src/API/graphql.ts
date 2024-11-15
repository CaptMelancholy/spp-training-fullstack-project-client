import { gql } from '@apollo/client';

const GET_TASKS = gql`
  query getTasks {
    getTasks {
      id
      title
      deadline
      status
    }
  }
`;

const ADD_TASK = gql`
  mutation addTask($task: TaskInput!) {
    addTask(task: $task) {
      id
      title
      deadline
      status
    }
  }
`;

const UPDATE_TASK = gql`
  mutation updateTask($id: Int!, $task: TaskInput!) {
    updateTask(id: $id, task: $task) {
      id
      title
      deadline
      status
    }
  }
`;

const DELETE_TASK = gql`
  mutation deleteTask($id: Int!) {
    deleteTask(id: $id) {
      id
      title
      deadline
      status
    }
  }
`;

const REGISTER_USER = gql`
  mutation register($input: RegisterInput!) {
    register(input: $input) {
      message
    }
  }
`;

const LOGIN_USER = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      username
      message
    }
  }
`;

const LOGOUT_USER = gql`
  mutation logout {
    logout {
      message
    }
  }
`;

const CHECK_AUTH = gql`
  query checkAuth {
    checkAuth {
      username
    }
  }
`;

export {GET_TASKS, ADD_TASK, DELETE_TASK, UPDATE_TASK, LOGIN_USER, LOGOUT_USER, CHECK_AUTH, REGISTER_USER}