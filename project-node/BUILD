load("@npm//@bazel/typescript:index.bzl", "ts_config", "ts_project")
load("@build_bazel_rules_nodejs//:index.bzl", "nodejs_test")

package(default_visibility = ["//visibility:public"])

deps = [
    "@npm//@bazel/typescript",
    "@npm//systeminformation",
    "@npm//jest",
    "@npm//typescript",
    "@npm//@types/node",
    "@npm//@types/jest",
    "@npm//ts-jest",
]

ts_config(
    name = "config",
    src = "tsconfig.json",
)

ts_project(
    name = "build",
    srcs = glob(
        ["*.ts"],
        exclude = [
            "**/*spec.ts",
            "node_modules/**/*.*",
        ],
    ),
    declaration = True,
    declaration_map = True,
    source_map = True,
    tsconfig = "tsconfig.json",
    deps = deps,
)

nodejs_test(
    name = "test",
    chdir = package_name(),
    data = glob([
        "**/*.ts",
    ]) + [
        "//:package.json",
        "//:package-lock.json",
        ":tsconfig.json",
        ":jest.config.js",
    ] + deps,
    entry_point = "@npm//:node_modules/jest/bin/jest.js",
    templated_args = [
        "--no-cache",
        "--no-watchman",
        "--ci",
        "--colors",
        "--node_options=--max_old_space_size=4096",
        "--detectOpenHandles",
    ],
)
