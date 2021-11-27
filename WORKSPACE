workspace(
    name = "bazel-demo",
    managed_directories = {"@npm": ["node_modules"]},
)


load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "4e1a5633267a0ca1d550cced2919dd4148575c0bafd47608b88aea79c41b5ca3",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/4.2.0/rules_nodejs-4.2.0.tar.gz"],
)

http_archive(
    name = "rules_python",
    url = "https://github.com/bazelbuild/rules_python/releases/download/0.5.0/rules_python-0.5.0.tar.gz",
    sha256 = "cd6730ed53a002c56ce4e2f396ba3b3be262fd7cb68339f0377a45e8227fe332",
)

load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories", "npm_install")
load("@rules_python//python:pip.bzl", "pip_install")

node_repositories(
    node_version = "14.17.0",
    package_json = ["//:package.json"],
)

npm_install(
    name = "npm",
    package_json = "//:package.json",
    package_lock_json = "//:package-lock.json",
)

pip_install(
    name = "pip",
    requirements = "//:requirements.txt",
)