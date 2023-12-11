module.exports = {
  development: {
    username: 'postgres',
    password: 'yoga95',
    database: 'mbti_expert_system_development',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: 'root',
    password: null,
    database: 'mbti_expert_system_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'mbti_expert_system_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
