var bucketName = "mychat";
var keyName = "mychat.txt";
var playername = document.getElementById("playername");
var providerName = 'cognito-idp.us-west-2.amazonaws.com/us-west-2_txnXKZA8I';

AWS.config.region = "us-west-2";
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "us-west-2:af8ba488-864b-4002-b38f-3321e141edf7",
});

var usernameString;
var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();
var dynamodb = new AWS.DynamoDB();
var slashpoint = location.href.indexOf("access_token=");
var endofat = location.href.indexOf("&e");
var accesstoken = location.href.substring(slashpoint + 13, endofat);

var idslashpoint = location.href.indexOf("=");
var endofid = location.href.indexOf("&");
var idtoken = location.href.substring(idslashpoint + 1, endofid);
// Amazon Cognito creates a session which includes the id, access, and refresh tokens of an authenticated user.

//
//
//

/*
var authenticationData = {
    Username : 'test',
    Password : 'Test123456!',
};
var authenticationDetails = new AWS.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);
var poolData = { UserPoolId : 'us-west-2_jIe5FOyRx',
    ClientId : '29g31plofq2bbrd0m9pr5q0rn'
};
var userPool = new AWS.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
var userData = {
    Username : 'test',
    Pool : userPool
};
var cognitoUser = new AWS.CognitoIdentityServiceProvider.CognitoUser(userData);
cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
        var idToken = result.idToken.jwtToken;
    },

    onFailure: function(err) {
        alert(err);
    },

});
*/


//
//
//

/*AWS.config.getCredentials(function(err) {
    if (err) {
        console.log(err.stack);
        console.log("credentials not loaded");
    }
    else {
      console.log("Access key:", AWS.config.credentials.accessKeyId);
      console.log("Secret access key:", AWS.config.credentials.secretAccessKey);
    }
});*/


getPiglifeUser();

function getPiglifeUser() {
    var params = {
        AccessToken: accesstoken,
    };
    cognitoidentityserviceprovider.getUser(params, function (err, data) {
        if (err) {
            window.location.href = 'https://google.com';
        }
        else {
            userLoggedIn(providerName, idtoken);
            usernameString = data.Username;
            getDynamoDB();
            playername.textContent = data.UserAttributes[2].Value;
        }
    });
}


// Called when an identity provider has a token for a logged in user
function userLoggedIn(providerName, token) {
    AWS.config.credentials.Logins = AWS.config.credentials.Logins || {};
    AWS.config.credentials.Logins[providerName] = token;
    //AWS.config.credentials.expired = true;
}


function getDynamoDB() {
    var params = {
        Key: {
            'username': {
                S: usernameString,
            },
        },
        TableName: 'piglife',
    };

    dynamodb.getItem(params, function (err, data) {
        if (err) {
            console.log(err, err.stack);
        } 
        else {
            console.log(data);
        }
    });
}