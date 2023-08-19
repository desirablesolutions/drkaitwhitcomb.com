export function routes() {

    return {
        metaData: {},
        data: {
            home: {
                authenticator: {
                    branding: {
                     
                        image: {
                          src: "https://static.wixstatic.com/media/254c65_f4b64d6d825546f186dc0a4358ffa178~mv2.png/v1/fill/w_346,h_154,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Kait%20Whitcomb%20logo-04.png",
                        },
                        url: "/",
                      },
                      form: {
                        header: {
                          title: "Dr. Kait Whitcomb, LLC",
                          subTitle: "Welcome to Dr. Kait Whitcomb, LLC | Decentralized Web Manager",
                        },
                        formData: {
                          authentication: {
                                submitAction: {
                                  url: "/spaces",
                                  label: "Login",
                                  icon: "✒️"
                                } ,
                                input: {
                                  label: "Password",
                                  password: true,
                                  warning: "Password is case-sensitive"
                                } 
                          },
                          footer: {
                            description: "Kait's Decentralized Web Manager",
                            link: {
                              label: "Help",
                              url: "https://desirable.solutions/help",
                            }
                          },
                        },


                      },
                }
            },
            spaces: {}
        }
    }
}