import schedule
import time
import papermill as pm
from git import Repo


def update_vnexpress_data():
    pm.execute_notebook(
       'Update vnexpress data.ipynb',
       'Update_data_result.ipynb'
    )

if __name__ == '__main__':
    update_vnexpress_data()
    repo = Repo('.')
    repo.index.add('*')
    repo.index.commit('update new data')
    repo.git.push()
