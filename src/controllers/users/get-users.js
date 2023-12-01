const getUsers = ({ getUsersUseCase }) => {
  return async function post(httpRequest){
      try{
          const {source = {}, ...info} = httpRequest.body;
          source.ip = httpRequest.ip;
          source.browser = httpRequest.headers["User-Agent"];
          const data = {
            query: httpRequest.query,
            decoded: httpRequest.decoded
          }

          if(httpRequest.headers["Referrer"]){
              source.referrer = httpRequest.headers["Referrer"];
          };
          const fetched = await getUsersUseCase(data);

          return {
              headers: {
                "Content-Type": "application/json",
                "Last-Modified": new Date(fetched.modifiedOn).toUTCString()
              },
              statusCode: 200,
              body: fetched 
            };

      } catch(err){
          console.log(err);

          return {
          headers: {
              "Content-Type": "application/json"
          },
          statusCode: 400,
          body: {
              error: err.message
          }
          };
      };
  };
};

export default getUsers;