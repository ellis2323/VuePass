from setuptools import setup, find_packages

import vuepass

setup(
    name="vuepass",
    version="0.1",
    packages=find_packages(exclude=['contrib', 'docs', 'tests']),
    author="Laurent Mallet",
    author_email="laurent.mallet@gmail.com",
    install_requires=['pytest'],
)


