from fabric import task

@task
def deploy(ctx):
    print("Inside the task!")