import subprocess
import sys

def install(package : list):
    subprocess.check_call([sys.executable, "-m", "pip", "install", *package])

package_list = ["numpy"]
install(package_list)
