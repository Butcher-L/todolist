const updateTransactionController = ({ updateTransactionUseCase }) => {
  return async function post(httpRequest){
      try{
          const {source = {}, ...info} = httpRequest.body;
          source.ip = httpRequest.ip;
          source.browser = httpRequest.headers["User-Agent"];

          if(httpRequest.headers["Referrer"]){
              source.referrer = httpRequest.headers["Referrer"];
          };
          const data = {
            ...info,
            decoded : httpRequest.decoded,
          }         

          const id = httpRequest.params.id
          const posted = await updateTransactionUseCase(id,data);

          return {
              headers: {
                "Content-Type": "application/json",
                "Last-Modified": new Date(posted.modifiedOn).toUTCString()
              },
              statusCode: 200,
              body: posted 
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
}

export default updateTransactionController;