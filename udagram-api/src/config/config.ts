export const config = {
  'username': "postgres",
  'password': "duyatt123",
  'database': "udagram",
  'host': 'udagram.c98ikvysumgl.ap-southeast-1.rds.amazonaws.com',
  'dialect': 'postgres',
  'aws_region': process.env.AWS_REGION,
  'aws_profile': process.env.AWS_PROFILE,
  'aws_media_bucket': process.env.AWS_BUCKET,
  'url': process.env.URL,
  'jwt': {
    'secret': process.env.JWT_SECRET,
  },
};
