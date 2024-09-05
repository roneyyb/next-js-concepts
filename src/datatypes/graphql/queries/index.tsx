

const GET_ALL_QUOTES = `query getAllQuotes {
            quotes {
                    name
                    by  {
                           firstName
                        }
                    }
                }`

const USER_LOGIN = `mutation SigninUser($userSignin:SigninUserInput!){
  user:signinUser(userSignin:$userSignin){ 
    token
  }
}
`

const GET_ALL_USERS = `query getUsersQuery{
  users {
        _id
        email
        lastName
    }
}`

const USER_SIGNUP = `mutation createUser($userNew:UserInput!){
  user:signupUser(userNew:$userNew){ 
    _id
    email
    firstName
    lastName
  }
}`

const GET_USER = `query getUser($_id:ID!) {
  user(_id:$_id) {
    _id
    firstName
    lastName
    email
    quotes {
        name
    }
    
  }
}`

const CREATE_QUOTE = `mutation createQuote($quoteInput:QuoteInput!){
  quote:createQuote(quoteInput:$quoteInput)
}`

export {
    GET_ALL_QUOTES,
    GET_ALL_USERS,
    USER_LOGIN,
    USER_SIGNUP,
    GET_USER,
    CREATE_QUOTE
}