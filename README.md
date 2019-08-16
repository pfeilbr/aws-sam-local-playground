# aws-sam-local-playground

[aws-sam-local](https://github.com/awslabs/aws-sam-local)

### session
```sh
cd examples/hello-world

sam local invoke "HelloWorld" -e event.json
echo '{"name": "Brian" }' | sam local invoke "HelloWorld"

# debugging
# ensure launch.json localRoot is set to directory where index.js or code exists
# e.g. "localRoot": "${workspaceRoot}/examples/hello-world"
sam local invoke -e event.json -d 5858 HelloWorld

# set breakpoints in code (vscode)
# then run debug in vscode

# package
# NOTE: bucket must exist
sam package --template-file template.yaml --s3-bucket sam-deploy-bucket-01 --output-template-file packaged.yaml

# deploy
sam deploy --template-file packaged.yaml --stack-name sam-hello-world-v0 --capabilities CAPABILITY_IAM

```