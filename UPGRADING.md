# 从旧 Shendu 仓库迁移到 Shendu Next

Shendu Next 使用新的 GitHub 仓库。旧部署的 `git origin` 不应直接改指向新仓库；在独立目录克隆新版，保留旧代码与数据副本，核对完成后再把新站投入使用。本文命令假设旧目录为 `/opt/Shendu`，新目录为 `/opt/Shendu-Next`，请先按实际部署路径检查并替换。

## 迁移前

1. 在旧站为每个需要迁移的账户导出个人 `.shendu` 加密备份，并把文件和密码保存在服务器之外。新版仍可读取 v4、v3、v2、旧流式和旧加密个人备份；旧版整站网页包和 `.shendu-db` 不属于新版网页导入格式。
2. 在 Debian 服务器以 root 身份停止旧站，复制**整个**旧目录。数据库、WAL 文件、`.env` 与 `backup-master.key` 必须成组保存；不要只复制 `shendu.db`，也不要让新站生成的密钥覆盖旧密钥。

```sh
cd /opt/Shendu/shendu
docker compose stop
cd /opt
umask 077
backup_dir="/opt/Shendu-before-next-$(date +%Y%m%d-%H%M%S)"
cp -a Shendu "$backup_dir"
printf '旧站回退副本：%s\n' "$backup_dir"
git -C /opt/Shendu rev-parse HEAD
```

核对副本中存在 `shendu/data/shendu.db` 与 `shendu/data/backup-master.key`。若旧站配置了其他 `SHENDU_MASTER_KEY_PATH`，必须一并保存对应密钥。正式部署前，建议先在隔离机器或独立端口演练下述步骤。

## 启动新仓库

```sh
cd /opt
git clone https://github.com/hikling/Shendu-Next.git Shendu-Next
umask 077
cp -a /opt/Shendu/shendu/.env /opt/Shendu-Next/shendu/.env
mkdir -p /opt/Shendu-Next/shendu/data /opt/Shendu-Next/shendu/tmp
cp -a /opt/Shendu/shendu/data/. /opt/Shendu-Next/shendu/data/
cp -a /opt/Shendu/shendu/tmp/. /opt/Shendu-Next/shendu/tmp/
cd /opt/Shendu-Next/shendu
docker compose up -d --build
docker compose ps
curl -fsS https://你的域名/healthz
```

两个部署的 Compose 目录末级同为 `shendu`，因此会继续使用原有 Caddy 数据卷；旧站已停止后才能启动新站。原有 SQLite 数据与内部密钥会继续使用。首次启动可能迁移旧明文数据；不要用启动后的数据库单独覆盖回退副本。

用原账户逐项核对六类复盘、历史、完成锁定、行动验证、阶段设置、六套主题、账户权限、个人备份和外部目标。核对登录会话与北京时间周期。再导出一份新版个人备份并在隔离站点预览、恢复。若使用网页 `.shendu-site` 整站备份，应由新版导出，并在**隔离的新站**验证同版本恢复。

## 回退

如果核对失败，停止新站并重新启动原目录或上述完整副本。不要同时启动两个站点，也不要把新站生成的数据库单独复制回旧代码目录。

```sh
cd /opt/Shendu-Next/shendu
docker compose down
cd /opt/Shendu/shendu
docker compose up -d --build
docker compose ps
```

回退后用旧账户登录并检查记录、设置和备份目标。新站启动后产生的写入不会自动进入旧站；需要保留时，先在隔离环境用加密备份评估迁移。`docker compose down` 不带 `-v`，保留原 Caddy 数据卷。
