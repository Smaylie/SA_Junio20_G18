from fabric.api import *

env.hosts = '157.230.218.35'
# Set the username
env.user = "root"
env.password = "sa2K21!r"

def host_type():
    run('uname -s')
 
 
def diskspace():
    run('df')
 
 
def check():
 
    # check host type
    host_type()
 
    # Check diskspace
    diskspace()